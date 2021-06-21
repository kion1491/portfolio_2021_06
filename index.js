window.onload = function () {

  parallax_0 = document.getElementById("test");

  window.addEventListener('scroll', scrollFunc, false);

}

function scrollFunc(e){
  scrollTop = document.documentElement.scrollTop;

  console.log(scrollTop)


  parallax_0.style.top = `${scrollTop * 1.13}px`;
  parallax_0.style.transform = `scale(${scrollTop*0.001})`
}