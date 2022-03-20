let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.custom_cursor_link');
let link_name = document.getElementById('.logo');
let cursor_discription = document.getElementById('.cursor_discription');

//window.addEventListener('mouseover',cursor);

// function cursor(e) {
//    document.onmouseover = (e);
//   console.log(e.target.id);
//    document.getElementById("cursor_discription").innerHTML = "EBAT!";
//};
//function cursor() {
//    var showID = document.getElementById(showID);
//    console.log(showID);
//};

document.getElementById('.logo').onclick = function() {
  
    document.getElementById('.logo').style.display = "none";

}


document.addEventListener('mousemove', e => {
    mouseCursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;");
});

document.getElementById('.custom_cursor_link').addEventListener('mouseover', e => {
    document.getElementById('.cursor_discription').style.display = "none";
});

document.querySelectorAll('.custom_cursor_link').addEventListener("mouseover", () => {
    cursor_discription.style.visibility = "hidden";
});
