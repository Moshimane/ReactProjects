import { useState } from "react";

export default function Form() {
  const [myValue, setMyValue] = useState({
    myFirstValue: "",
    mySecondValue: "",
  });

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log(myValue);
  }

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={myValue.myFirstValue}
            // onChange={(ev) =>
            //   setMyValue({
            //     myFirstValue: ev.target.value,
            //     mySecondValue: myValue.mySecondValue,
            //   })
            // }
            onChange={(ev) =>
              setMyValue({ ...myValue, myFirstValue: ev.target.value })
            }
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            value={myValue.mySecondValue}
            // onChange={(ev) =>
            //   setMyValue({
            //     myFirstValue: myValue.myFirstValue,
            //     mySecondValue: ev.target.value,
            //   })
            // }
            onChange={(ev) =>
              setMyValue({ ...myValue, mySecondValue: ev.target.value })
            }
          />
        </div>
        <br />
        <div>
          <button onClick={(ev) => handleSubmit(ev)}>Add</button>
        </div>
      </form>
    </div>
  );
}
