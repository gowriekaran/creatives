function animSpritesheet(e, n, a, t, r, o, b) {
    r = "undefined" != typeof r ? r : 100, o = "undefined" != typeof o ? o : 1, b = "undefined" != typeof b ? b : 0;
    var i = 0,
        l = 0,
        c = setInterval(function () {
            l < o ? i < t ? (e.style.backgroundPosition = "-" + n * i + "px -" + a * i + "px", i++) : (e.style.backgroundPosition = "-" + n * (i - 1) + "px -" + a * (t - 1) + "px", i = 0, l++) : (clearInterval(c), b && (e.classList.add("hide"), e.removeAttribute("style")))
        }, r)
}
banner.replayBtn = document.querySelector(".replay-button"), banner.cta = document.querySelector(".cta-container"), banner.tnfLogoBig = document.querySelector(".TNF_logo.big"), banner.tnfLogo = document.querySelector(".TNF_logo.small"), banner.afLogo = document.querySelector(".AF_logo"), banner.rain = document.querySelector(".rain"), banner.glitch = document.querySelectorAll(".glitch"), banner.beegees = document.querySelectorAll(".bg"), banner.copies = document.querySelectorAll(".copytext"), banner.createTL = function () {
    banner.myTL = new TimelineMax({
        paused: !banner.autoplay,
        repeat: banner.autoplayCount - 1,
        repeatDelay: banner.delayBeforeAutoReplay / 1e3,
        onStart: function () {
            banner.myTL.to(banner.replayBtn, 0, {
                css: {
                    className: "+=hide"
                }
            })
        },
        onComplete: function () {
            banner.played += 1, banner.myTL.to(banner.replayBtn, 0, {
                css: {
                    className: "-=hide"
                }
            })
        }
    }), banner.replayBtn.addEventListener("click", banner.myTL.restart.bind(banner.myTL)), banner.myTL.add("glitch1", "+=" + banner.globalSpeed), banner.myTL.to(banner.tnfLogoBig, 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch1"), banner.myTL.to(banner.glitch[0], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[0], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch1"), banner.myTL.add("transit1-2", "+=" + .5 * banner.globalSpeed), banner.myTL.to(banner.tnfLogoBig, 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "transit1-2"), banner.myTL.to(banner.beegees[0], 0 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "transit1-2"), banner.myTL.to(banner.copies[2], 0 * banner.globalSpeed, {
        opacity: 1
    }), banner.myTL.to(banner.beegees[0], 8 * banner.globalSpeed, {
        scale: 1.5,
        ease: Power1.easeOut
    }), banner.myTL.add("glitch2", "+=" + 2 * banner.globalSpeed), banner.myTL.to(banner.copies[2], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch2"), banner.myTL.to(banner.glitch[1], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[1], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch2"), banner.myTL.to(banner.beegees[0], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch2"), banner.myTL.to(banner.glitch[2], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[2], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch2"), banner.myTL.add("transit3-4", "+=" + .5 * banner.globalSpeed), banner.myTL.to(banner.beegees[1], 1.5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "transit3-4"), banner.myTL.to(banner.copies[0], 0 * banner.globalSpeed, {
        opacity: 1,
        onComplete: function () {
            banner.copies[2].removeAttribute("style")
        }
    }, "transit3-4"), banner.myTL.to(banner.beegees[1], 8 * banner.globalSpeed, {
        autoRound: !1,
        backgroundPosition: "top right",
        ease: Power1.easeOut
    }, "transit3-4"), banner.myTL.add("glitch3"), banner.myTL.to(banner.copies[0], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch3"), banner.myTL.to(banner.glitch[3], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[3], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch3"), banner.myTL.to(banner.beegees[1], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch3"), banner.myTL.to(banner.glitch[4], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[4], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch3"), banner.myTL.add("transit4-5", "+=" + .5 * banner.globalSpeed), banner.myTL.to(banner.beegees[2], 1.5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "transit4-5"), banner.myTL.to(banner.copies[1], 0 * banner.globalSpeed, {
        opacity: 1
    }, "transit4-5"), banner.myTL.to(banner.beegees[2], 8 * banner.globalSpeed, {
        autoRound: !1,
        scale: 1.4,
        ease: Power1.easeOut
    }, "transit4-5"), banner.myTL.add("glitch4"), banner.myTL.to(banner.copies[1], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch4"), banner.myTL.to(banner.glitch[5], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[5], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch4"), banner.myTL.to(banner.beegees[2], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch4"), banner.myTL.to(banner.glitch[6], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[6], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch4"), banner.myTL.add("transit5-6", "+=" + .5 * banner.globalSpeed), banner.myTL.to(banner.beegees[3], 1.5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "transit5-6"), banner.myTL.to(banner.copies[2], .5 * banner.globalSpeed, {
        autoRound: !1,
        opacity: 1,
        ease: Power1.easeIn
    }), banner.myTL.to(banner.copies[2], 3 * banner.globalSpeed, {
        autoRound: !1,
        ease: Power1.easeOut
    }), banner.myTL.add("glitch5", "+=" + .5 * banner.globalSpeed), banner.myTL.to(banner.copies[2], 0 * banner.globalSpeed, {
        opacity: 0,
        ease: Power1.easeInOut
    }, "glitch5"), banner.myTL.to(banner.glitch[2], 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.glitch[2], banner.adWidth, 0, 3, 40, 1, !0)
        }
    }, "glitch5"), banner.myTL.to(banner.copies[2], 0 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut,
        delay: .5 * banner.globalSpeed
    }), banner.myTL.add("endFrameLogos", "-=" + 2 * banner.globalSpeed), banner.myTL.to(banner.afLogo, .5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "endFrameLogos"), banner.myTL.to(banner.tnfLogo, .5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "endFrameLogos"), banner.myTL.to(banner.cta, .5 * banner.globalSpeed, {
        opacity: 1,
        ease: Power1.easeInOut
    }, "endFrameLogos"), banner.myTL.to(banner.rain, 30 * banner.globalSpeed, {
        ease: Power1.easeInOut
    }, "transit5-6"), banner.myTL.to(banner.rain, 0, {
        opacity: 1,
        onComplete: function () {
            animSpritesheet(banner.rain, banner.adWidth, 0, 5, 50, 50, !1)
        }
    }, "transit5-6")
};