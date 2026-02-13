

var csr = document.querySelector("#cursor")
var blr = document.querySelector("#blur")

document.addEventListener("mousemove", function (dets) {

    setTimeout(function () {

        csr.style.left = dets.x + 0 + "px"
        csr.style.top = dets.y - 3 + "px"



    }, 130) // delay in milliseconds (100ms)

})
document.addEventListener("mousemove", function (dets) {

    setTimeout(function () {
        blr.style.left = dets.x - 150 + "px"
        blr.style.top = dets.y - 150 + "px"



    }, 90) // delay in milliseconds (100ms)

})







gsap.to("#nav", {
    backgroundColor: "#0b0b0bc7",
    backdropFilter: "blur(10px)",
    duration: 0.5,
    height: "65.27px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -15%",
        end: "top -16%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from(".lft,.rght", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 60%",
        end:"top 0%",
        
    }
})

gsap.from(".pics", {
    Z: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    
    scrollTrigger: {
        trigger: ".pics",
        scroller: "body",
        markers: true,
        scrub: 2,
        start:"top 70%",
        end:"top 40%"
        
    }
})
