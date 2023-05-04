
const straps = () => {
    const tl = new gsap.timeline({onComplete: straps});
    const scale = () => {
        return 0.1 + Math.random()*3;
    }
    const color = () => {
        const colors = ['pink', 'red', 'green', 'blue', 'yellow'];
        return colors[Math.floor(Math.random() * 5)];
    }
    const strap = document.querySelectorAll('#voice-bars > *');
    tl.add('Frame1')
        .set(strap, { y: -30, transformOrigin: '50% 50%' }, "Frame1")
        .staggerTo(strap, 0.3, {scaleY: scale, repeat: 1, yoyo: true, fill: color, ease: "bounce.easeIn" }, 0.1, "Frame1")
    return tl;
}

const blink = () => {
    const tl = new gsap.timeline({repeat: -1, repeatDelay: 3, delay: 2 });
    const eyes = document.querySelectorAll('#eye-left, #eye-right');

    tl
      .set(eyes, { transformOrigin: "50% 50%" })
      .to(eyes, .1, { scaleY: 0, fill: "#231f20" })
      .to(eyes, .05, { scaleY: 1, fill: "#48b3e6" })
      .to(eyes, .12, { scaleY: 0, fill: "#231f20" }, "+=0.5")
      .to(eyes, .03, { scaleY: 1, fill: "#48b3e6" })
      .to(eyes, .08, { scaleY: 0, fill: "#231f20" }, "+=1.5")
      .to(eyes, .08, { scaleY: 1, fill: "#48b3e6" })
    return tl;
}

const move = () => {
    const tl = new gsap.timeline();

    const legs = document.querySelectorAll('#leg-left, #leg-right');
    tl.staggerTo(legs,.5, { y: -60, repeat: -1, yoyo: true}, .25)

    return tl;
}

//Master Timeline
const tl_master = new gsap.timeline();

tl_master.add("start");
tl_master.add(straps(), "start");
tl_master.add(move(), "start");
tl_master.add(blink(), "start");