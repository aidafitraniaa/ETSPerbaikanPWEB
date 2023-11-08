fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
      return response.json();
    })
    
    .then((response) => {
      console.log(response);
      const data = response.results;
      let cards = "";
      data.forEach((pok) => {
        cards += `

        <div class="col-xl-6 col-md-6 my-4 col-6">
          <div class="card border-primary shadow h-100 border-primary blue" style="max-width: 30rem">
            <div class="card-body text-primary text-center">
              <p class="h5 mb-2 card-text text-dark">
                ${pok.name}
              </p>
              <a href="${pok.url}" class="btn btn-primary">Detail</a>
            </div>
          </div>

        </div>`;
      });
      const pokemonContainer = document.querySelector("#card");
      pokemonContainer.innerHTML = cards;
    });
