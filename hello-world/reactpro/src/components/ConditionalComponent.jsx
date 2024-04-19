export default function ConditionalComponent() {
  // Conditional Rendering using element variables
  //   let text;
  const condition = false;
  //   if (condition) {
  //     text = <h1>My text</h1>;
  //   } else {
  //     text = <h1>My other text</h1>;
  //   }

  //   return <div>{text}</div>;

  // Conditional Rendering using element variables

  return condition ? <h1>My text</h1> : <h1>My other text</h1>;
}
