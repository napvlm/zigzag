// Controller
var controller = new ScrollMagic();

var scene = new ScrollScene({
        triggerElement: '.rev-block',
        triggerHook: 0.1
    })
    .setClassToggle('.rev-blcok', '.show')
    .addTo(controller);