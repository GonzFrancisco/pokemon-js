# Pokémon Microfrontend React Application

This project is a one-page application built with React, Vite, and Tailwind CSS. It consumes data from the public PokéAPI and presents two microfrontends: one for a Pokémon list and another for the details of a selected Pokémon.

## Project Structure

```
├── public/                     // Static assets directory
│   └── vite.svg                // Vite logo
├── src/                        // Source directory
│   ├── assets/                 // Image and SVG assets
│   ├── components/             // Reusable components
│   │   ├── details/            // Components for Pokémon details
│   │   │   ├── PokemonDetails.jsx  // Displays detailed information of a Pokémon
│   │   │   ├── GridItem.jsx        // Helper component to format detail grids
│   │   │   ├── DetailsLeft.jsx     // Layout for the left section in details
│   │   │   └── DetailsRight.jsx    // Layout for the right section in details
│   │   ├── home/               // Components for Pokémon list and views
│   │   │   ├── pokemons/        // List and card display for Pokémon
│   │   │   │   ├── Pokemons.jsx     // Fetches and renders the list of Pokémon
│   │   │   │   ├── PokemonCard.jsx  // Card component for displaying Pokémon name, image, and link to details
│   │   │   │   └── view/            // Responsive views for the Pokémon list
│   │   │   │       ├── MobileView.jsx   // Layout for mobile display of Pokémon list
│   │   │   │       ├── DesktopView.jsx  // Layout for desktop display of Pokémon list
│   │   │   │       └── ViewDeterminer.jsx  // Determines whether to show Mobile or Desktop view
│   │   └── shared/             // Shared components (Skeleton loader, Logo)
│   │       ├── Skeleton.jsx        // Loading skeleton component for asynchronous data
│   │       └── Logo.jsx            // Logo component for the app
│   ├── pages/                  // Page-level components (Home, Pokémon details)
│   │   ├── Home.jsx                // Main homepage containing Pokémon list
│   │   └── Pokemon.jsx             // Pokémon details page
│   ├── routes/                 // React Router configuration
│   │   └── routes.jsx              // Contains route logic for navigating between home and details
│   ├── App.jsx                 // Main App component
│   ├── main.jsx                // Entry point for the app
│   └── index.css               // Tailwind CSS configuration
├── .gitignore                  // Git ignore file
├── index.html                  // Main HTML template
├── package.json                // Project dependencies
├── package-lock.json           // Lock file for npm
├── postcss.config.js           // PostCSS configuration
├── tailwind.config.js          // Tailwind CSS configuration
├── vite.config.js              // Vite configuration
└── vercel.json                 // Vercel deployment configuration
```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/GonzFrancisco/pokemon-js.git
   cd pokemon-js
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Microfrontend Structure

The app is divided into two microfrontends:

1. **Pokémon List Microfrontend**

   - Displays a list of Pokémon fetched from the PokéAPI.
   - Key components:
     - `Pokemons.jsx`: Handles fetching and rendering the list.
     - `PokemonCard.jsx`: Represents each Pokémon as a card with name, image, and a link to details.
     - `ViewDeterminer.jsx`: Switches between mobile and desktop layouts based on the screen size.

2. **Pokémon Details Microfrontend**
   - Displays detailed information for a selected Pokémon.
   - Key components:
     - `PokemonDetails.jsx`: Fetches and displays the Pokémon’s name, image, type, height, and weight.
     - `DetailsLeft.jsx` & `DetailsRight.jsx`: Layout components for organizing Pokémon information.

## How it Works

- **Routing:** The application uses React Router (`src/routes/routes.jsx`) to navigate between the Pokémon list and the Pokémon details pages.
- **API Consumption:** The app fetches data from the [PokéAPI](https://pokeapi.co/) using `fetch` to retrieve the Pokémon list and individual Pokémon details.
- **UI Design:** Tailwind CSS is used for styling the components, providing a responsive and modern interface.

## Deployment

The app is configured for deployment on Vercel. You can view the live demo here:

[Live Demo](https://pokedexreact-one.vercel.app/)

To deploy:

1. Link your project to a Vercel account.
2. Run the following command:
   ```bash
   vercel
   ```

## License

This project is licensed under the MIT License.
