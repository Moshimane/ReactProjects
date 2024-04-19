// const name = "Joy";

// function displayMessage() {
//   return "Wow!";
// }

function Hello({ person }) {
  //turn only a single root element
  return (
    <h1>
      {person.message} {person.name}! our seats are {person.seatNumbers}
    </h1>
  );
}

export default Hello;
