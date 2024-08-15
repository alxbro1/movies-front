const printCards = (cards) => {
    const fragment = document.createDocumentFragment();
    cards.forEach((e) => {
      let element = document.createElement("li");
      element.classList.add("movieCard");
      element.innerHTML = `
            <div style="position: relative;">
              <div class="premiere-label">Premiere</div>
              <p class="genres">${e.genre.join("#")}</p>
              <img
              src="${e.poster}"
              alt="poster of ${e.title}" />
              </div>
              <h3>${e.title} (${e.director})</h3>
              <label class="stars"><span class="material-symbols-outlined">star</span>${e.rate}</label>
            <label class="timeLabel">${e.duration}</label>
            <h5>${e.year}</h5>
            `;
      fragment.appendChild(element);
    });
  
    $("#CardsContainerPremiere").append(fragment);
  };

module.exports = printCards