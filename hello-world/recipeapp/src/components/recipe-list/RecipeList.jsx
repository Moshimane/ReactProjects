import RecipeItem from "../recipe-item/recipe-item";

export default function RecipeList({ recipeList }) {
  return (
    <div>
      {recipeList.map((recipeItem, idx) => (
        <RecipeItem key={idx} recipeItem={recipeItem} />
      ))}
    </div>
  );
}
