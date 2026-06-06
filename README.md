# Pokémon Explorer
> A modern, responsive web application for exploring Pokémon data with beautiful UI and detailed information cards.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v5.1.0-lightgrey.svg)](https://expressjs.com/)

## Overview

Pokémon Explorer is a production-ready web application that provides an intuitive interface for browsing and exploring Pokémon data. The application features a clean, modern design with responsive cards, detailed information pages, and smooth navigation between different Pokémon profiles.

Built with performance and user experience in mind, this application solves the problem of accessing comprehensive Pokémon information in a visually appealing and organized manner. Whether you're a Pokémon enthusiast, developer, or researcher, this platform provides quick access to essential Pokémon statistics, abilities, and characteristics.

## Key Features

- **Interactive Pokémon Cards**: Browse Pokémon with visually appealing cards showing images and basic stats
- **Detailed Information Pages**: Click any Pokémon to view comprehensive details including type, abilities, weaknesses, and descriptions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using Bootstrap 5
- **Modern UI/UX**: Clean gradient design with hover effects and smooth transitions
- **Fast Navigation**: Quick access between Pokémon list and individual detail pages
- **RESTful Routes**: Clean URL structure with SEO-friendly Pokémon slugs
- **Bootstrap Integration**: Professional styling with Bootstrap icons and components

## Tech Stack

- **Backend**: Node.js v14+, Express.js v5.1.0
- **Frontend**: HTML5, CSS3, Bootstrap 5.3.0, Bootstrap Icons
- **Styling**: Custom CSS with gradients and animations
- **Architecture**: Server-side rendering with Express static middleware
- **Deployment**: Ready for production deployment on any Node.js hosting platform

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/fawcetteugene/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Access the application**
   Open your browser and navigate to: `http://localhost:3000`

### Development Mode
```bash
npm run dev
```

## Usage

### Home Page
- Navigate to `http://localhost:3000` to access the main landing page
- Click on any Pokémon button to view detailed information

### Pokémon List
- Visit `/pokemons` to see all Pokémon in a responsive card layout
- Each card displays the Pokémon image, name, ID, and type
- Click "View Details" to navigate to individual Pokémon pages

### Individual Pokémon Pages
- Access via `/[pokemon-slug]` (e.g., `/sandslash`, `/vulpix`)
- View comprehensive information including:
  - High-resolution Pokémon image
  - Type, category, and abilities
  - Physical stats (height, weight)
  - Weaknesses and detailed description
  - Navigation back to the main list

### Code Example
```javascript
// Example of accessing Pokémon data
app.get(`/${pokemon.slug}`, (req, res) => {
  // Renders detailed Pokemon information page
  res.send(renderPage(pokemon.name, pokemonDetailsHTML));
});
```

## Project Structure

```
pokemon-explorer/
├── app.js              # Main Express server and routing logic
├── index.html          # Landing page with Pokémon navigation
├── style.css           # Custom styling and responsive design
├── package.json        # Project dependencies and scripts
├── images/             # Pokémon image assets
│   ├── sandslash.png
│   ├── nidoran-f.png
│   ├── clefairy.png
│   └── vulpix.png
├── node_modules/       # npm dependencies
├── README.md           # Project documentation
├── LICENSE             # MIT license
└── CHANGELOG.md        # Version history
```

## Contributing Guidelines

We welcome contributions to improve Pokémon Explorer! Please follow these guidelines:

### Pull Request Process
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with clear messages: `git commit -m "feat: add new feature"`
5. Push to your fork and submit a pull request

### Coding Standards
- Follow JavaScript ES6+ conventions
- Use meaningful variable and function names
- Maintain consistent indentation (2 spaces)
- Add comments for complex logic
- Ensure responsive design compatibility

### Bug Reports
Please use the GitHub Issues tab to report bugs. Include:
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Browser and Node.js version
- Screenshots if applicable

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact & Support

- **WhatsApp**: +254794689731
- **LinkedIn**: [https://www.linkedin.com/in/fawcetteugene/](https://www.linkedin.com/in/fawcetteugene/)

## Acknowledgments

- Pokémon images and data used for demonstration purposes
- Bootstrap team for the excellent CSS framework
- Express.js community for the robust web framework
- Node.js foundation for the runtime environment
