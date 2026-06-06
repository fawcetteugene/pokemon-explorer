const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./', { index: 'index.html' }));

const pokemonList = [
  {
    name: 'Sandslash',
    slug: 'sandslash', // URL-safe path
    id: '0028',
    type: 'Ground',
    category: 'Mouse',
    abilities: ['Sand Veil'],
    description: 'It is adept at attacking with the spines on its back and its sharp claws while quickly scurrying about.',
    height: "3' 03\"",
    weight: "65.0 lbs",
    weaknesses: ['Water', 'Grass', 'Ice'],
    image: 'images/sandslash.png'
  },
  {
    name: 'Nidoran♀',
    slug: 'nidoran-f', // URL-safe path for Nidoran♀
    id: '0029',
    type: 'Poison',
    category: 'Poison Pin',
    abilities: ['Rivalry', 'Poison Point'],
    description: 'Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.',
    height: "1' 04\"",
    weight: "15.4 lbs",
    weaknesses: ['Ground', 'Psychic'],
    image: 'images/nidoran-f.png'
  },
  {
    name: 'Clefairy',
    slug: 'clefairy',
    id: '0035',
    type: 'Fairy',
    category: 'Fairy',
    abilities: ['Cute Charm', 'Magic Guard'],
    description: 'On nights with a full moon, Clefairy gather from all over and dance. Bathing in moonlight makes them float.',
    height: "2' 00\"",
    weight: "16.5 lbs",
    weaknesses: ['Poison', 'Steel'],
    image: 'images/clefairy.png'
  },
  {
    name: 'Vulpix',
    slug: 'vulpix',
    id: '0037',
    type: 'Fire',
    category: 'Fox',
    abilities: ['Flash Fire'],
    description: 'If it is attacked by an enemy that is stronger than itself, it feigns injury to fool the enemy and escapes.',
    height: "2' 00\"",
    weight: "21.8 lbs",
    weaknesses: ['Water', 'Ground', 'Rock'],
    image: 'images/vulpix.png'
  }
];


const renderPage = (title, bodyContent) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
  </head>
  <body>
    ${bodyContent}
  </body>
  </html>
`;


app.get('/pokemons', (req, res) => {
  const cards = pokemonList.map(p => `
    <div class="col-md-3">
      <div class="card shadow-lg">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${p.name} (#${p.id})</h5>
          <p class="card-text text-muted">Type: ${p.type}</p>
          <a href="/${p.slug}" class="btn btn-gradient">View Details</a>
        </div>
      </div>
    </div>`).join('');

  const body = `
    <h1 class="text-center my-4">Pokémon Collection</h1>
    <div class="container py-5">
      <div class="row g-4 justify-content-center">
        ${cards}
      </div>
    </div>
  `;

  res.send(renderPage('Pokémon List', body));
});


pokemonList.forEach(p => {
  app.get(`/${p.slug}`, (req, res) => {
    const infoTable = `
      <table class="table table-bordered">
        <tr><th>Type</th><td><strong>${p.type}</strong></td></tr>
        <tr><th>Category</th><td><strong>${p.category}</strong></td></tr>
        <tr><th>Abilities</th><td><strong>${p.abilities.join(', ')}</strong></td></tr>
        <tr><th>Description</th><td><em>${p.description}</em></td></tr>
        <tr><th>Height</th><td><strong>${p.height}</strong></td></tr>
        <tr><th>Weight</th><td><strong>${p.weight}</strong></td></tr>
        <tr><th>Weaknesses</th><td><strong>${p.weaknesses.join(', ')}</strong></td></tr>
      </table>`;

    const body = `
      <div class="pokemon-container container py-4">
        <div class="text-center mb-4">
          <img src="/${p.image}" alt="${p.name} Image" class="img-fluid" style="max-height: 300px;">
        </div>
        <h1 class="text-center">${p.name} (#${p.id})</h1>
        ${infoTable}
        <div class="text-center mt-3">
          <a href="/pokemons" class="btn btn-secondary">
            <i class="bi bi-arrow-left-circle me-2"></i>Back to List
          </a>
        </div>
      </div>
    `;

    res.send(renderPage(p.name, body));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

