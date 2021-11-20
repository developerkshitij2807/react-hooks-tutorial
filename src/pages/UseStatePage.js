import React from "react";
import HookCounter from "../components/UseState/HookCounter";
import HookCounterThree from "../components/UseState/HookCounterThree";
import HookCounterTwo from "../components/UseState/HookCounterTwo";

function UseState() {
  return (
    <>
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
    </>
  );
}

export default UseState;
