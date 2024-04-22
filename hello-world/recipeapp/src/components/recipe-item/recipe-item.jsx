export default function RecipeItem({ recipeItem }) {
  return (
    <div>
      <span>
        <img src={recipeItem.image} height={40} width={40} />
      </span>
      <span>{recipeItem.title}</span>
    </div>
  );
}
