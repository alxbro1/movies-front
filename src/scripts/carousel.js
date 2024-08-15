const carousel = () => {
  const carouselCont = document.getElementById("carouselCont");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const totalItems = document.querySelectorAll(".carouselItem").length;

  let index = 0;

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalItems;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
  });

  function updateCarousel() {
    const offset = -index * 100;
    carouselCont.style.transform = `translateX(${offset}%)`;
  }

  document.querySelectorAll(".carouselItem").forEach((item, idx) => {
    const imgSrc = item.querySelector("img").src;
    item.style.backgroundImage = `url(${imgSrc})`;
    item.querySelector("img").style.display = "none";
  });
};

module.exports = carousel