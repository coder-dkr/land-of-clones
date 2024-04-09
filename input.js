function optcome() {
  document.getElementsByClassName('features')[0].classList.toggle('absolute');
  document.getElementsByClassName('features')[0].classList.toggle('hamclcick');
  document.getElementsByClassName('features')[0].classList.toggle('-translate-x-[50rem]');



}

let toptton = document.getElementById("myBtnn");

window.onscroll = function () { whenScroll() };

function whenScroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    toptton.style.display = "block";
  } else {
    toptton.style.display = "none";
  }
}
function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function goDark() {
  document.getElementById('bodi').classList.toggle("bg-[#4C4646]");
  document.getElementById('bodi').classList.toggle("text-yellow-500");
  document.getElementById('heaven-moon').style.color ="white";

}

// var liz = document.getElementsByTagName('li');
// liz.onmouseover = function(){
//   const lis = liz.classList;
// lis.add("unrline");
// };
