const tl = gsap.timeline({defaults: {ease: "power3.out"}});

const pot = document.getElementById('Pot');
const stem = document.getElementById('stem');
const flower = document.getElementById('flower');
const leaves = document.querySelectorAll('.leaf');
const plant = document.querySelectorAll('.plant');

tl
    //.addLabel("label1")
    .from(pot, 1, {y: -500})
    .from(stem, 1, {scaleY: 0, transformOrigin: '50% 100%'})
    .staggerFromTo(leaves, .5, {scale: 0.7, opacity: 0}, {scale: 1, opacity: 1}, .3)
    .staggerFromTo(flower.children, .7, {scale: 0.7, opacity: 0}, {scale: 1, opacity: 1}, .2)

