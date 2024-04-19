import Fruit from "./Fruit";
export default function Fruits() {
  const fruits = [
    {
      name: "Apple",
      price: 30,
    },
    {
      name: "Mango",
      price: 85,
    },
    {
      name: "Peach",
      price: 30,
    },
    {
      name: "Guava",
      price: 34,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit, fruitidx) =>
          fruit.price > 30 ? <Fruit key={fruitidx} fruit={fruit} /> : ""
        )}
      </ul>
    </div>
  );
}
