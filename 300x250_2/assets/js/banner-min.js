banner.replayBtn=document.querySelector(".replay-button"),banner.createTL=function(){banner.myTL=new TimelineMax({paused:!banner.autoplay,repeat:banner.autoplayCount-1,repeatDelay:banner.delayBeforeAutoReplay,onComplete:function(){banner.myTL.to(banner.replayBtn,0,{css:{className:"-=hide"}})}}),banner.replayBtn.addEventListener("click",banner.myTL.restart.bind(banner.myTL)),banner.myTL.add("frame1"),banner.myTL.fromTo(".visual1",banner.globalSpeed,{x:-250},{x:0},"frame1"),banner.myTL.add("frame2","+="+4*banner.globalSpeed),banner.myTL.to(".frame1",banner.globalSpeed,{opacity:0},"frame2"),banner.myTL.fromTo(".visual2",banner.globalSpeed,{x:300},{x:0,opacity:1}),banner.myTL.fromTo(".visual4",banner.globalSpeed,{x:300},{x:0,opacity:1}),banner.myTL.to(".copyText3",banner.globalSpeed,{opacity:1}),banner.myTL.to([".visual3",".visual5",".visual12"],banner.globalSpeed,{opacity:1}),banner.myTL.add("frame3","+="+5*banner.globalSpeed),banner.myTL.to([".frame2",".visual12"],banner.globalSpeed,{opacity:0},"frame3"),banner.myTL.fromTo(".visual7",banner.globalSpeed,{x:300},{x:0,opacity:1}),banner.myTL.to(".copyText4",banner.globalSpeed,{opacity:1}),banner.myTL.to([".visual6",".visual8",".visual12"],banner.globalSpeed,{opacity:1}),banner.myTL.add("frame4","+="+5*banner.globalSpeed),banner.myTL.to([".frame3",".visual12"],banner.globalSpeed,{opacity:0},"frame4"),banner.myTL.fromTo(".visual10",banner.globalSpeed,{x:300},{x:0,opacity:1}),banner.myTL.to(".copyText5",banner.globalSpeed,{opacity:1}),banner.myTL.to([".visual9",".visual11",".visual12"],banner.globalSpeed,{opacity:1}),banner.myTL.add("frame5","+="+5*banner.globalSpeed),banner.myTL.to(".visual2",banner.globalSpeed,{opacity:0},"frame5"),banner.myTL.to(".frame4",banner.globalSpeed,{opacity:0},"frame5"),banner.myTL.to(".bg",banner.globalSpeed,{opacity:1}),banner.myTL.fromTo([".copyText6",".rectangle1"],banner.globalSpeed,{x:-300},{x:0,opacity:1}),banner.myTL.fromTo([".copyText7",".rectangle2"],banner.globalSpeed,{x:300},{x:0,opacity:1}),banner.myTL.add("frame6","+="+4*banner.globalSpeed),banner.myTL.to(".frame5",banner.globalSpeed,{opacity:0},"frame6"),banner.myTL.to([".copyText8",".copyText9",".copyText10"],banner.globalSpeed,{opacity:1}),banner.myTL.add("sync"),banner.myTL.fromTo([".visual13",".visual15"],banner.globalSpeed,{y:250},{y:0,opacity:1},"sync"),banner.myTL.fromTo(".visual14",banner.globalSpeed,{y:-250},{y:0,opacity:1},"sync"),banner.myTL.to([".triangle1",".triangle2",".triangle3"],.5*banner.globalSpeed,{opacity:1},"sync"),banner.myTL.add("frame7","+="+4*banner.globalSpeed),banner.myTL.to(".frame6",banner.globalSpeed,{opacity:0},"frame7"),banner.myTL.to([".copyText11",".visual16"],banner.globalSpeed,{opacity:1}),banner.myTL.to([".rectangle3",".copyText12"],banner.globalSpeed,{opacity:1})},window.onload=banner.createTL;