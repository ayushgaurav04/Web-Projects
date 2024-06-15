// this is all about the gsap.
gsap.from(".container .headline h1 span",{
opacity: 0,
delay:  1,
duration:1



}

)
gsap.from(".container .headline  p",{
    opacity: 0,
    delay:  1,
    duration: 1
}
)
gsap.from(".videoboxes",{
    opacity: 0,
    delay:  1.2,
    duration: 0.5,
    y:20
}
)
gsap.from(".navbar .options a",{
    opacity: 0,
    delay:  1.2,
    duration: 0.5,
    y:-10
})
gsap.from(".container_3 .logo3 .main_logo_image",{
opacity:0,
delay:1,
duration:2,
scrollTrigger: {
    trigger:".logo3",
    scroller: "body",
    markers: false,
    start: "top 80%",
    // scrub:2,
    
}


})
gsap.from(".container2 .headline h1",{
    opacity:0,
    delay:1,
    duration:2,
    scrollTrigger: {
        trigger:"#headline",
        scroller: "body",
        markers: false,
        // start: "top 80%",
        // scrub:2,
        
    }
    
    
    })