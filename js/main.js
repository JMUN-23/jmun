    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
        .from('#img1', 4, {
            y: -100,
            x: 0,
            ease: Power3.easeInOut
        })

        .from('#img2', 4, {
        y: 30,
        x: 60,
        ease: Power3.easeInOut
    }, '-=4')
    .from('#img3', 4, {
        y: -30,
        x: 200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('#img4', 4, {
        y: -100,
        x: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .from('#img5', 4, {
        y: -80,
        x: -20,
        ease: Power3.easeInOut
    }, '-=4')
    .from('#img6', 4, {
        y: -100,
        x: 23,
        ease: Power3.easeInOut
    }, '-=4')
    

    let scene = new ScrollMagic.Scene({
        triggerElement: '#committees-sec',
        triggerHook: 0,
        duration: '100%'
    })
    .setTween(timeline)
    .setPin('#committees-sec')
    .addTo(controller);