window.onload = function () {
  header = document.getElementById("header");
  window.addEventListener('scroll', scrollFunc, false);

}

function scrollFunc(e){
  scrollTop = document.documentElement.scrollTop;
  if(scrollTop <= 100){
    console.log(header.classList)
    header.classList.remove('on')
    // header.style.top = "15px";
  }else{
    header.classList.add('on')
    // header.style.top = 0;

  }
  // parallax_0.style.transform = `scale(${scrollTop*0.005})`
}