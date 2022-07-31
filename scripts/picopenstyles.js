function load() {
    document.getElementById("style-pic-1").addEventListener("click", picOpen);
    document.getElementById("dark-div").addEventListener("click", picClose);
    document.getElementById("cross").addEventListener("click", picClose);
}



function picOpen() {
    var dd = document.getElementById("dark-div");
    var sp1 = document.getElementById("style-pic-1");
    var pc1 = document.getElementById("pic-con-1");

    pc1.innerHTML = "<img src='/img/m2.jpg' class='picpicc' id='picpic'><div class='crossc' id='cross'>x</div>";

    var pp = document.getElementById("picpic");
    var cr = document.getElementById("cross");

    dd.style.zIndex = "2";
    dd.style.background = "#000000a9";
    
    document.body.classList.add("stop-scrolling");
}



function picClose() {
    var dd = document.getElementById("dark-div");
    var cr = document.getElementById("cross");
    var pc1 = document.getElementById("pic-con-1");


    document.body.classList.remove("stop-scrolling");
    
    dd.style.background = "transparent";
    dd.style.zIndex = "-2";
    document.getElementById("cross").classList.remove("crossc");
    document.getElementById("picpic").classList.remove("picpicc");
    pc1.innerHTML = "";
    
}