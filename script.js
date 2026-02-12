var csr = document.querySelector("#cursor")
var blr = document.querySelector("#blur")
document.addEventListener("mousemove", function (dets) {
    csr.style.left = dets.x + 1 +"px"
    csr.style.top = dets.y - 2 + "px"
    blr.style.left = dets.x - 150 +"px"
    blr.style.top = dets.y - 150 + "px"
})









gsap.to("#nav", {
    backgroundColor: "#000000b5",
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