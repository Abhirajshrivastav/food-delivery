import React from "react";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import DATA from "./config/Restaurant/DATA";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
const App = () => {
  return (
    // <HomeScreen />
    // <WelcomeScreen />
    <RecipeDetailScreen recipe={DATA[1].recipes[1]} />
   )
  ;
};

export default App;