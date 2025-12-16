document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  // gsap code here!

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#one",
            start: "50% 50%",
            end: "300% 50%",
            scrub: 3, 
            pin: true
        }
    })

    tl.to("#one", {
        backgroundColor: "#000000",
    },'s')
    .to("#one img", {
        scale: 1
    },'s')
    .to("#one p",{
        fontSize: "18px"
    },'s')
    .to("#one img",{
        opacity: 0,
    }, 's2')
    .to("#one .cirblur",{
        opacity: 0,
    }, 's2')
    .to("#one h1",{
        fontSize: "20rem",
        opacity: 0
    },'s3')
    .to("#one p",{
        fontSize: "10px",
        opacity: 0
    },'s3')
 });