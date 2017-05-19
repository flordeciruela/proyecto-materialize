// var images=document.getElementsByClassName('fotos')[0];
// var modal = document.getElementById('modal1');
//
// //images.onclick=function captura(e){
// images.addEventListener('click',function (e){
//   e.preventDefault();
//   console.log(e.target);
//   console.log(e.target.nextElementSibling);
//   console.log(e.currentarget);
//   // colocar condicional para solo seleccionar la clase icono
//   if(e.target.className == "responsive-img modalMayor col s4"){
//     // console.log(images);
//     var modalImg = document.getElementById("img01");
//     console.log(modalImg);
//     modalImg.style.width="90%";
//     modalImg.src = e.target.src;
//     console.log(modalImg.src);
//     }
// });
$(document).ready(function(){
 $('.materialboxed').materialbox();
});
