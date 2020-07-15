function splitScroll() {
    const controller = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.about-title',
            triggerHook: 0
        })
        .setPin('.about-title')
        .addIndicators()
        .addTo(controller);
}

splitScroll();

function splitScroll1() {
    const controller1 = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.work-title',
            triggerHook: 0
        })
        .setPin('.work-title')
        .addIndicators()
        .addTo(controller1);
}

splitScroll1();

function splitScroll2() {
    const controller2 = new ScrollMagic.Controller();


    new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: '.contact-title',
            triggerHook: 0
        })
        .setPin('.contact-title')
        .addIndicators()
        .addTo(controller2);
}

splitScroll2();