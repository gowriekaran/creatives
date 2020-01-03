var banner = {};
banner.autoplay = !0, banner.played = 0, banner.autoplayCount = 100, banner.globalSpeed = 1, banner.delayBeforeAutoReplay = 4e3, banner.width = 300, banner.height = 250, banner.replay = function () {
    banner.replayBtn.hide(), banner.myTL.seek(0), banner.myTL.play()
}, banner.checkReplay = function () {
    banner.played < banner.autoplayCount ? setTimeout(banner.replay, banner.delayBeforeAutoReplay) : banner.replayBtn.show()
}, banner.createTL = function () {
    banner.myTL = new TimelineMax({
        onComplete: function () {
            banner.played++, banner.checkReplay()
        }
    }), banner.myTL.add("transition-frame1"), banner.myTL.to(".intro_container", banner.globalSpeed / 3, {
        top: banner.height / 2 + "px",
        left: banner.width / 2 + "px",
        width: 0,
        height: 0,
        ease: Power0.easeOut,
        delay: 1.25 * banner.globalSpeed
    }, "transition-frame1"), banner.myTL.to(".logo, .text-1", banner.globalSpeed / 3, {
        top: -banner.height / 2 + "px",
        left: -banner.width / 2 + "px",
        ease: Power0.easeOut,
        delay: 1.25 * banner.globalSpeed
    }, "transition-frame1"), banner.myTL.add("transition-frame2"), banner.myTL.fromTo(".chicken_left_arm", banner.globalSpeed / 6, {
        transform: "rotate(0deg)"
    }, {
        transform: "rotate(7deg)",
        ease: Power0.easeIn,
        yoyo: !0,
        repeat: 10
    }, "transition-frame2"), banner.myTL.to(".bg, .chicken", banner.globalSpeed / 2, {
        transform: "scale(1)",
        ease: Power0.easeIn
    }, "transition-frame2"), banner.myTL.to(".chicken", banner.globalSpeed, {
        transform: "translateX(-35px)",
        ease: Power0.easeIn
    }, "transition-frame2"), banner.myTL.to(".chicken_left_arm", banner.globalSpeed / 2, {
        transform: "rotate(130deg)",
        ease: Power1.easeInOut,
        delay: banner.globalSpeed / 5
    }), banner.myTL.add("transition-frame3"), banner.myTL.to(".object-1, .object-2", banner.globalSpeed / 5, {
        transform: "translateX(0px)",
        ease: Power0.easeIn
    }, "transition-frame3"), banner.myTL.to(".object-1", 2 * banner.globalSpeed, {
        rotation: "2160deg",
        ease: Power0.easeIn,
        delay: .5 * banner.globalSpeed
    }, "transition-frame3"), banner.myTL.add("transition-frame4"), banner.myTL.to(".object-1, .object-2", banner.globalSpeed, {
        transform: "translateY(250px)",
        ease: Power2.easeIn
    }, "transition-frame4"), banner.myTL.to(".object-1", 2 * banner.globalSpeed, {
        rotation: "2160deg",
        ease: Power0.easeIn
    }, "transition-frame4"), banner.myTL.to(".frame-1-container", banner.globalSpeed / 8, {
        opacity: 0,
        delay: banner.globalSpeed / 2
    }, "transition-frame4"), banner.myTL.to(".frame-2-container", banner.globalSpeed / 8, {
        opacity: 1,
        delay: banner.globalSpeed / 2
    }, "transition-frame4"), banner.myTL.add("transition-frame5"), banner.myTL.to(".object-3, .object-4", .25 * banner.globalSpeed, {
        transform: "translateX(-160px)",
        ease: Power0.easeIn
    }, "transition-frame5"), banner.myTL.to(".chicken-2", .25 * banner.globalSpeed, {
        transform: "rotate(-130deg) translate(200px, -50px)",
        ease: Power2.easeOut,
        delay: banner.globalSpeed
    }, "transition-frame5"), banner.myTL.to(".text-2", banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: banner.globalSpeed / 2
    }, "transition-frame5"), banner.myTL.to(".frame-2-container", banner.globalSpeed / 8, {
        opacity: 0,
        ease: Power0.easeIn,
        delay: 1.5 * banner.globalSpeed
    }, "transition-frame5"), banner.myTL.add("transition-frame6"), banner.myTL.to(".text-2", .25 * banner.globalSpeed, {
        transform: "translateY(-60px)",
        ease: Power0.easeIn
    }, "transition-frame6"), banner.myTL.to(".object-5", .25 * banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn
    }, "transition-frame6"), banner.myTL.add("transition-frame7"), banner.myTL.to(".text-2", .25 * banner.globalSpeed, {
        opacity: 0,
        ease: Power0.easeIn,
        delay: banner.globalSpeed
    }, "transition-frame7"), banner.myTL.to(".object-6", .25 * banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: 1.5 * banner.globalSpeed
    }, "transition-frame7"), banner.myTL.to(".object-7", .25 * banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: 2 * banner.globalSpeed
    }, "transition-frame7"), banner.myTL.add("transition-frame8", "+=" + .75 * banner.globalSpeed), banner.myTL.to(".object-5", .25 * banner.globalSpeed, {
        transform: "scale(.8)",
        zIndex: 2,
        ease: Power0.easeIn
    }, "transition-frame8"), banner.myTL.to(".object-6", .25 * banner.globalSpeed, {
        opacity: 0,
        ease: Power0.easeIn
    }, "transition-frame8"), banner.myTL.to(".object-7", .25 * banner.globalSpeed, {
        opacity: 0,
        ease: Power0.easeIn
    }, "transition-frame8"), banner.myTL.to(".logo-end", .25 * banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: .25 * banner.globalSpeed
    }, "transition-frame8"), banner.myTL.to(".text-3", .25 * banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: .25 * banner.globalSpeed
    }, "transition-frame8"), banner.myTL.to(".cta-button", banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: .5 * banner.globalSpeed
    }, "transition-frame8"), banner.myTL.to(".legal", banner.globalSpeed, {
        opacity: 1,
        ease: Power0.easeIn,
        delay: banner.globalSpeed
    }, "transition-frame8")
}, window.onload = function () {
    banner.adContainer = document.querySelector("#ad-container"), banner.replayBtn = document.querySelector(".replay-button"), banner.replayBtn.show = function () {
        var e = this;
        e.classList.remove("hide"), e.addEventListener("click", banner.replay)
    }, banner.replayBtn.hide = function () {
        var e = this;
        e.classList.add("hide"), e.removeEventListener("click", banner.replay)
    }, banner.createTL(), banner.autoplay === !0 && banner.myTL.play()
};