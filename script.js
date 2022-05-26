const progDiv1 = document.getElementById("prog1");
const progDiv2 = document.getElementById("prog2");
const progBars1 = document.querySelectorAll(".fir-bars");
const progBars2 = document.querySelectorAll(".sec-bars");
const screenPos = window.innerHeight;

window.addEventListener("scroll", function () {
    const divPos1 = progDiv1.getBoundingClientRect().top;
    const divPos2 = progDiv2.getBoundingClientRect().top;

    function setProgress1() {
        setTimeout(progBars1.forEach((progBar) => {
            let value = progBar.dataset.progress
            progBar.style.width = `${value}%`
        }), 1000)
    };

    function setProgress2() {
        setTimeout(progBars2.forEach((progBar) => {
            let value = progBar.dataset.progress;
            progBar.style.width = `${value}%`;
        }), 1000)
    };

    if (divPos1 < screenPos) {
        setProgress1();
    }

    if (divPos2 < screenPos) {
        setProgress2();
    }
})

// on About page

const progBar1 = document.getElementById("line1");
const progBar2 = document.getElementById("line2");
const progBar3 = document.getElementById("line3");
const progBar4 = document.getElementById("line4");

window.addEventListener("scroll", () => {
    const BarBlock1 = progBar1.getBoundingClientRect().top;
    const BarBlock2 = progBar2.getBoundingClientRect().top;
    const BarBlock3 = progBar3.getBoundingClientRect().top;
    const BarBlock4 = progBar4.getBoundingClientRect().top;



    if (BarBlock1 < screenPos) {
        function filler1() {
            let value = progBar1.dataset.progress;
            progBar1.style.width = `${value}%`;
        }
    }
    if (BarBlock2 < screenPos) {
        function filler2() {
            let value = progBar2.dataset.progress;
            progBar2.style.width = `${value}%`;
        }
    }
    if (BarBlock3 < screenPos) {
        function filler3() {
            let value = progBar3.dataset.progress;
            progBar3.style.width = `${value}%`;
        }
    }
    if (BarBlock4 < screenPos) {
        function filler4() {
            let value = progBar4.dataset.progress;
            progBar4.style.width = `${value}%`;
        }
    }
})