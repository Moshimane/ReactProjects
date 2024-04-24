import { useState, useEffect } from "react";
import RecipeContext from "../constants/RecipeContext";
import RecipeList from "../recipe-list/RecipeList";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "My_API_Key";

export default function Search() {
  const [search, setSearch] = useState("pasta");
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`${URL}?query=${search}&apiKey=${API_KEY}`);
      const data = await response.json();
      setRecipeList(data.results);
    }

    getRecipes();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
      />
      <RecipeList recipeList={recipeList} />
    </div>
  );
}
