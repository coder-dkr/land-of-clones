function optcome() {
    document.getElementsByClassName('features')[0].classList.toggle('absolute');
    document.getElementsByClassName('features')[0].classList.toggle('hamclcick');
    document.getElementsByClassName('features')[0].classList.toggle('-translate-x-[50rem]');



}

let mybutton = document.getElementById("myBtnn");

window.onscroll = function() {whenScroll()};

function whenScroll() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}