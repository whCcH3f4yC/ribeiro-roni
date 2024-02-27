export function animaLeft() {
  const anima_left = document.querySelectorAll("[data-anima]");

  if (anima_left.length ) {
    const window_metade = window.innerHeight * 0.8;

    function handleScroll() {
      anima_left.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - window_metade) < 0;
        if(sectionVisivel){
          section.classList.add(section.dataset.anima);
        }
       });
       
    }
    handleScroll()
  window.addEventListener("scroll", handleScroll);
  }
}


export function animaRight(){
  const anima_right = document.querySelectorAll("[data-animaright]");

  if (anima_right.length ) {
    const window_metade = window.innerHeight * 0.8;

    function handleScroll() {
      anima_right.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = (sectionTop - window_metade) < 0;
        if(sectionVisivel){
          section.classList.add(section.dataset.animaright);
        }
       });
       
    }
    handleScroll()
  window.addEventListener("scroll", handleScroll);
  }
}
