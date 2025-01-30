# Dark & Light Mode Implementation

## Overview
This project implements a **Dark & Light Mode** feature using **React Context API**. It allows users to toggle between dark and light themes, and their preference is saved in **local storage**, so it remains the same even after a page refresh.

## Key Features
- **React Context API**: Used to manage and provide the theme across the app.
- **Custom Hook (`useTheme`)**: Simplifies access to the theme and toggle function.
- **Local Storage**: Stores the theme preference to persist after refresh.
- **CSS Modules Approach**: Styling is managed using modular CSS.
- **Mobile-First Design**: The UI is first designed for mobile, then improved using **media queries** for larger screens like laptops and desktops.

## How It Works
1. **ThemeContext (`ThemeContext.js`)**:
   - Stores the current theme (`light` or `dark`).
   - Provides a `toggleTheme` function to switch themes.
   - Uses `useEffect` to apply the theme to the `<body>` tag and save it to local storage.

2. **ThemeProvider (`ThemeContext.js`)**:
   - Wraps the application and provides theme-related data to all components.

3. **Custom Hook (`useTheme.js`)**:
   - Allows any component to access `theme` and `toggleTheme` easily.

4. **Usage in Components (e.g., `Hero.js`)**:
   - Components import `useTheme` to get the current theme and toggle button.
   - No need to pass props manually for theme switching.

## How to Use
1. Wrap your app with `<ThemeProvider>` in `index.js` or `App.js`:
   ```jsx
   import { ThemeProvider } from './common/ThemeContext';

   function App() {
     return (
       <ThemeProvider>
         <YourComponents />
       </ThemeProvider>
     );
   }
   export default App;
   ```

2. Use `useTheme` in any component:
   ```jsx
   import { useTheme } from '../../common/ThemeContext';

   function Hero() {
     const { theme, toggleTheme } = useTheme();

     return (
       <div>
         <h1>Current Theme: {theme}</h1>
         <button onClick={toggleTheme}>Toggle Theme</button>
       </div>
     );
   }
   ```

## Styling Approach
- **CSS Modules**: Styles are written in a modular approach (e.g., `Hero.module.css`), ensuring scoped styles per component.
- **Mobile-First Design**: The layout is designed primarily for **mobile screens**, then improved using **media queries** for larger devices.
- **Dynamic Theme Styling**: The theme is applied using the `data-theme` attribute on the `<body>` tag, allowing easy CSS-based theme switching.

## Future Improvements
- Add animations for smooth theme transitions.
- Improve accessibility for better user experience.
- Expand theme options beyond just dark and light.

---
This README will help you quickly understand your project next time you revisit it! 🚀