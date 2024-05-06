
/* scroll h2 區塊標題 底層變色 start */
gsap.registerPlugin(ScrollTrigger)
const splitTypes = document.querySelectorAll('.text-color-transition')
splitTypes.forEach((char,i) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.8,
            stagger: 0.08,
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);// 回滾動 scroll
/* scroll h2 區塊標題 底層變色 end */




