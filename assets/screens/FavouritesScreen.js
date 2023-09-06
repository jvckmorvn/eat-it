import { useContext } from "react";

import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";

export default function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const favouriteMeals = MEALS.filter(meal => favouriteMealsCtx.ids.includes(meal.id))

  return (
    <MealsList items={favouriteMeals}/>
  );
}
