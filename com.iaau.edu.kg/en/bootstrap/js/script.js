var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 52
});

// function myFunction(){
//   var x=document.getElementById("nav-content");
//   if(x.className === "topnav"){
//     x.className+="responsive";
//   }
//   else{
//     x.className="topnav";
//   }
// }