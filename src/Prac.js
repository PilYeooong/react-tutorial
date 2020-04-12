import React, { useReducer } from "react";

const reducer = (prevState, actions) => {
  const { type, value } = actions;
  if (type === "SET_NAME"){
    return { ...prevState, name: value }
  }
  else if (type === "SET_AGE"){
    return { ...prevState, age:value }
  }
  return prevState;
};

const Prac = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', age: '' });
  const { name, age } = state;
  const onChange = (e) => {
    const { name: type, value } = e.target;
    dispatch({ type, value })
    // if(name === "name"){
    //   dispatch({ type: "SET_NAME", value: value })
    // }
    // if(name === "age"){
    //   dispatch({ type: "SET_AGE", value: value })
    // }
  }
  return (
    <div>
      name: {name} , age: {age}
      <br />
      <input type="text" name="SET_NAME" placeholder="name" onChange={onChange} />
      <input type="text" name="SET_AGE" placeholder="age" onChange={onChange} />
    </div>
  )
}
export default Prac;