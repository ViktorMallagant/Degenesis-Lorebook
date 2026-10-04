(() => {
  const viewport = document.querySelector('#map-viewport');
  const layer = document.querySelector('#map-layer');
  const image = document.querySelector('#world-image');
  const panel = document.querySelector('.map-panel');
  const zoomText = document.querySelector('#map-zoom');
  const loading = document.querySelector('#map-loading');
  const zoomIn = document.querySelector('#zoom-in');
  const zoomOut = document.querySelector('#zoom-out');
  const fullscreen = document.querySelector('#map-fullscreen');
  // Region coordinates use original image pixels. Add entries with x, y, width,
  // height, label, and href when detailed regional or city maps are available.
  const regions = [];
  const pointers = new Map();
  let scale = 1, minimum = 1, x = 0, y = 0, ready = false;
  const maximum = 4;
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  function constrain() {
    const w = viewport.clientWidth, h = viewport.clientHeight;
    const iw = image.naturalWidth * scale, ih = image.naturalHeight * scale;
    x = iw <= w ? (w - iw) / 2 : clamp(x, w - iw, 0);
    y = ih <= h ? (h - ih) / 2 : clamp(y, h - ih, 0);
  }
  function paint() {
    constrain();
    layer.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
    zoomText.textContent = `${Math.round(scale * 100)}%`;
    zoomIn.disabled = !ready || scale >= maximum;
    zoomOut.disabled = !ready || scale <= minimum;
  }
  function fit() {
    if (!ready) return;
    minimum = Math.min(viewport.clientWidth / image.naturalWidth, viewport.clientHeight / image.naturalHeight, 1);
    scale = minimum; x = 0; y = 0; paint();
  }
  function zoom(next, ax = viewport.clientWidth / 2, ay = viewport.clientHeight / 2) {
    if (!ready) return;
    const old = scale;
    scale = clamp(next, minimum, maximum);
    x = ax - (ax - x) * scale / old;
    y = ay - (ay - y) * scale / old;
    paint();
  }
  function local(event) {
    const r = viewport.getBoundingClientRect();
    return {x:event.clientX-r.left-viewport.clientLeft,y:event.clientY-r.top-viewport.clientTop};
  }
  viewport.addEventListener('wheel', event => {
    event.preventDefault();
    const p = local(event);
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientHeight : 1);
    zoom(scale * Math.exp(-clamp(delta, -200, 200) * .002), p.x, p.y);
  }, {passive:false});
  viewport.addEventListener('pointerdown', event => {
    if (!ready || (event.pointerType === 'mouse' && event.button !== 0) || event.target.closest('a')) return;
    viewport.focus({preventScroll:true});
    viewport.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, local(event));
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove', event => {
    if (!pointers.has(event.pointerId)) return;
    const before = [...pointers.values()];
    const old = pointers.get(event.pointerId), next = local(event);
    pointers.set(event.pointerId, next);
    if (pointers.size === 1) { x += next.x-old.x; y += next.y-old.y; paint(); }
    else if (pointers.size === 2) {
      const after = [...pointers.values()];
      const distance = ps => Math.hypot(ps[1].x-ps[0].x,ps[1].y-ps[0].y);
      const midpoint = ps => ({x:(ps[0].x+ps[1].x)/2,y:(ps[0].y+ps[1].y)/2});
      const a = midpoint(before), b = midpoint(after), d = distance(before);
      if (d > 0) zoom(scale * distance(after)/d,a.x,a.y);
      x += b.x-a.x; y += b.y-a.y; paint();
    }
  });
  function release(event) {pointers.delete(event.pointerId);if(!pointers.size)viewport.classList.remove('dragging');}
  ['pointerup','pointercancel','lostpointercapture'].forEach(type => viewport.addEventListener(type,release));
  viewport.addEventListener('keydown', event => {
    if (event.target !== viewport) return;
    const actions = {'+':()=>zoom(scale*1.3),'=':()=>zoom(scale*1.3),'-':()=>zoom(scale/1.3),'0':fit,ArrowLeft:()=>{x+=60;paint();},ArrowRight:()=>{x-=60;paint();},ArrowUp:()=>{y+=60;paint();},ArrowDown:()=>{y-=60;paint();}};
    if (actions[event.key]) {event.preventDefault();actions[event.key]();}
  });
  zoomIn.addEventListener('click',()=>zoom(scale*1.4));
  zoomOut.addEventListener('click',()=>zoom(scale/1.4));
  document.querySelector('#map-reset').addEventListener('click',fit);
  function expanded(open) {
    panel.classList.toggle('map-expanded',open);
    document.body.classList.toggle('map-expanded-open',open);
    fullscreen.textContent=open?'Exit fullscreen':'Fullscreen';
    fullscreen.setAttribute('aria-pressed',String(open));
  }
  fullscreen.addEventListener('click',async()=>{
    if(panel.classList.contains('map-expanded')){expanded(false);return;}
    try {
      if(document.fullscreenElement===panel)await document.exitFullscreen();
      else if(document.fullscreenEnabled)await panel.requestFullscreen();
      else expanded(true);
    } catch {expanded(true);}
  });
  document.addEventListener('fullscreenchange',()=>{
    const open=document.fullscreenElement===panel;
    fullscreen.textContent=open?'Exit fullscreen':'Fullscreen';
    fullscreen.setAttribute('aria-pressed',String(open));
  });
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&panel.classList.contains('map-expanded'))expanded(false);});
  new ResizeObserver(()=>{
    if(!ready)return;
    const wasFit=Math.abs(scale-minimum)<.001;
    minimum=Math.min(viewport.clientWidth/image.naturalWidth,viewport.clientHeight/image.naturalHeight,1);
    if(wasFit)fit();else{scale=Math.max(minimum,scale);paint();}
  }).observe(viewport);
  regions.forEach(region=>{
    const link=document.createElement('a');link.className='map-region';link.href=region.href;link.textContent=region.label;
    Object.assign(link.style,{left:`${region.x}px`,top:`${region.y}px`,width:`${region.width}px`,height:`${region.height}px`});
    document.querySelector('#map-regions').append(link);
  });
  function loaded(){ready=true;loading.hidden=true;fit();}
  image.addEventListener('load',loaded);
  image.addEventListener('error',()=>{loading.textContent='The map could not load. Please reload the page.';});
  if(image.complete&&image.naturalWidth)loaded();else{zoomIn.disabled=true;zoomOut.disabled=true;}
})();
