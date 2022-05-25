const progDiv1 = document.getElementById("prog1");
const progDiv2 = document.getElementById("prog2");
const progBars1 = document.querySelectorAll(".fir-bars");
const progBars2 = document.querySelectorAll(".sec-bars");

window.addEventListener("scroll", function () {
    const divPos1 = progDiv1.getBoundingClientRect().top;
    const divPos2 = progDiv2.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    function setProgress1() {
        setTimeout(progBars1.forEach((progBar) => {
            let value = progBar.dataset.progress
            progBar.style.width = `${value}%`
        }), 1000)
    };

    function setProgress2() {
        setTimeout(progBars2.forEach((progBar) => {
            let value = progBar.dataset.progress
            progBar.style.width = `${value}%`
        }), 1000)
    };

    if (divPos1 < screenPos) {
        setProgress1();
    }

    if (divPos2 < screenPos) {
        setProgress2();
    }
})
