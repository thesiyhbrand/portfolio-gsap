document.addEventListener("DOMContentLoaded", (event) => {

    // Initialize Lenis
    const lenis = new Lenis({
        autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
        console.log(e);
    });
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#one",
            start: "50% 50%",
            end: "300% 50%",
            scrub: 3,
            pin: true
        }
    })

    tl.to("#one", {
        backgroundColor: "#000000",
    }, 's')
        .to("#one img", {
            scale: 1
        }, 's')
        .to("#one p", {
            fontSize: "18px"
        }, 's')
        .to("#one img", {
            opacity: 0,
        }, 's2')
        .to("#one .cirblur", {
            opacity: 0,
        }, 's2')
        .to("#one h1", {
            fontSize: "20rem",
            opacity: 0
        }, 's3')
        .to("#one p", {
            fontSize: "10px",
            opacity: 0
        }, 's3')


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#two",
            start: "10% 50%",
            end: "60% 50%",
            scrub: 1,
            // markers: true
        }
    })

    tl2.to(".inner-two", {
        scale: 1
    }, 'tl2_1')
        .from(".inner-two h4", {
            y: 30,
            opacity: 0
        }, 'tl2_1')
        .to(".heading-top h1", {
            width: "100%",
            stagger: 0.1
        }, 'tl2_1')
        .from(".content-two p", {
            opacity: 0,
            filter: "blur(5px)",
        }, 'tl2_2')





    let mouse = document.querySelector(".mouse");

    document.addEventListener("mousemove", (det) => {
        mouse.style.left = det.clientX + "px";
        mouse.style.top = det.clientY + "px";
    })


    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#three",
            start: "10% 50%",
            end: "60% 50%",
            scrub: 1,
            // markers: true
        }
    })

    tl3.from(".img-three-2", {
        marginLeft: "10vw",
    }, 'tl3-1')
        .from(".img-three-1", {
            marginLeft: "-10vw",
        }, 'tl3-1')

    let tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#four",
            start: "0% 70%",
            end: "40% 90%",
            scrub: 1,
            // markers: true
        }
    })

    tl4.to("#three", {
        backgroundColor: "white"
    })


    let tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: "#four",
            start: "10% 50%",
            end: "100% 50%",
            scrub: 1,
            // markers: true
        }
    })
    tl5.to("#four h1", {
        xPercent: -80
    }, 'tim21')
        .from("#branding", {
            x: 500,
            opacity: 0
        }, 'tim21')
        .from("#design", {
            x: 500,
            opacity: 0
        })
        .from("#marketing", {
            x: 500,
            opacity: 0
        })

    let tl6 = gsap.timeline({
        scrollTrigger: {
            trigger: "#four",
            start: "65% 50%",
            end: "150% 50%",
            // markers: true,
            scrub: 1,
            pin: true
        }
    })

    tl6.to("#four", {
        backgroundColor: "#000",
        color: "#fff"
    })

    let tl7 = gsap.timeline({
        scrollTrigger: {
            trigger: "#five",
            start: "0% 80%",
            end: "50% 50%",
            markers: true,
            scrub: 1,
        }
    })

    tl7.from(".ccf1",{
        x: 200,
        opacity:0
    })
    .from(".ccf2",{
         x: 200,
        opacity:0
    })
    .from(".ccf3",{
         x: 200,
        opacity:0
    })

});



