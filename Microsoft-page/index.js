let hamse = document.getElementById('hamsera')
hamse.onclick = function optcome() {
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
toptton.onclick = function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


let puffy = document.getElementById('heaven-moon')
puffy.onclick = function goDark() {
  document.getElementById('bodi').classList.toggle("bg-[#111827]");
  document.getElementById('bodi').classList.toggle("text-yellow-500");
  document.getElementById('featr').style.background = "#1f2937";
  document.getElementById('follow-ms').style.background = "white";
  document.getElementById('follow-ms').style.color = "black";
  document.getElementById('headofweb').style.background = "#1f2937"; 
  
  const nodeList = document.querySelectorAll(".card");
  nodeList.forEach((node)=>{
    node.style.background ="#1f2937";
  })
  
  document.getElementById('heaven-moon').style.display ="none";
  document.getElementById('heaven-sun').style.display ="block";
  console.log("done dana done")
}


let puffydog  = document.getElementById('heaven-sun')
puffydog.onclick = function goBright() {
  document.getElementById('bodi').classList.toggle("bg-[#111827]");
  document.getElementById('bodi').classList.toggle("text-yellow-500");
  document.getElementById('featr').style.background = "white";
  // document.getElementById('follow-ms').style.background = "white";
  document.getElementById('headofweb').style.background = "white"; 
  const nodeList2 = document.querySelectorAll(".card");
  nodeList2.forEach((node)=>{
    node.style.background ="white";
  })
  
  
  document.getElementById('heaven-moon').style.display ="block";
  document.getElementById('heaven-sun').style.display ="none";

}


// var liz = document.getElementsByTagName('li');
// liz.onmouseover = function(){
//   const lis = liz.classList;
// lis.add("underline");
// };

