gsap.registerEffect({
    name: "fade",
    defaults: { duration:2},
    effect: (targets,config) => {
        return gsap.to(targets,
            {duration: config.duration, opacity: 0} );
    }
})

document.querySelectorAll(".box").forEach(function(box){
    box.addEventListener("mouseenter",
    function(){
        gsap.effects.fade(this);
    })
})