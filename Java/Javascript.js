function click(element) {
    alert("You clicked");
}

function color(){
    var dd1 = document.getElementById("div1");
    var dd2 = document.getElementById("div2");
    dd1.className = "yellow";
    dd2.className = "yellow";
}

function dolime() {
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "lime";
}

function doyellow(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "white";
    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,40,40);
    ctx.fillRect(60,10,40,40);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello", 10,80);

}