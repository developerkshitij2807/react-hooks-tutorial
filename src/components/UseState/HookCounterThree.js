import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ fname: "", lname: "" });
  return (
    <form>
      <input
        type="text"
        value={name.fname}
        onChange={(event) => setName({ ...name, fname: event.target.value })}
      />
      <input
        type="text"
        value={name.lname}
        onChange={(event) => setName({ ...name, lname: event.target.value })}
      />
      <h2>
        Name is {name.fname} {name.lname}
      </h2>
    </form>
  );
}

export default HookCounterThree;
