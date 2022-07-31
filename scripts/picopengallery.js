function load() {
    document.getElementById("p1").addEventListener("click", picOpen1);
    document.getElementById("p2").addEventListener("click", picOpen2);
    document.getElementById("p3").addEventListener("click", picOpen3);
    document.getElementById("p4").addEventListener("click", picOpen4);
    document.getElementById("p5").addEventListener("click", picOpen5);
    document.getElementById("p6").addEventListener("click", picOpen6);
    document.getElementById("p7").addEventListener("click", picOpen7);
    document.getElementById("p8").addEventListener("click", picOpen8);
    document.getElementById("p9").addEventListener("click", picOpen9);
    document.getElementById("p10").addEventListener("click", picOpen10);
    document.getElementById("p11").addEventListener("click", picOpen11);

}

// 1
function picOpen1() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m1.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 2
function picOpen2() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m2.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 3
function picOpen3() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m3.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 4
function picOpen4() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m4.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 5
function picOpen5() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m5.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 6
function picOpen6() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m6.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 7
function picOpen7() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m7.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 8
function picOpen8() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m1.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 9
function picOpen9() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m3.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 10
function picOpen10() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m2.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}
// 11
function picOpen11() {
    var pic1 = document.getElementById("here-pic");
    var bld = document.getElementById("bld");


    pic1.innerHTML = "<img src='/img/m6.jpg' class='full-pic'>";

    bld.style.zIndex = "2";
    bld.style.background = "#00000091";

    document.body.classList.add("stop-scrolling");

    bld.addEventListener("click",picClosee);
    document.body.style.marginLeft = "-17px";
}


function picClosee() {
    var bld = document.getElementById("bld");
    var pic1 = document.getElementById("here-pic");


    pic1.innerHTML = "";

    bld.style.zIndex = "-2";
    bld.style.background = "transparent";

    document.body.classList.remove("stop-scrolling");
    document.body.style.marginLeft = "0";
}
