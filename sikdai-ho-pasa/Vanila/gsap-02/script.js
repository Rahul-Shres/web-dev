
console.log(gsap.version);
// WE have GSAP Object
// 1 - Object Property which is #image
// 2 - Method which is action to create and control animation
gsap.to("#image1", {
    delay: 1,
    x: 350,
    y: 250,
    scaleX: 4,
    scaleY: 4
})
