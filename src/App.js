import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr:");
  return (
    <div>
      <div>Hello</div>
      <input placeholder={"name"} value={name.value} {...name} />
    </div>
  );
};

export default App;
