import"https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";!function(){let t=document.querySelectorAll("p");for(let e=0;e<t.length;e++)t[e].animate([{transform:"translateX(-10px)",opacity:0},{transform:"none",opacity:1}],{duration:1e4,fill:"both",timeline:new ScrollTimeline({scrollOffsets:[{target:t[e],edge:"end",rootMargin:"-20px",clamp:!0},{target:t[e],edge:"end",threshold:1,rootMargin:"-20px",clamp:!0}],fill:"both"})})}();