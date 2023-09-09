// custom hook

import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValidate] = useState(initialValue);

  const onChangeInput = (e) => {
    setValidate((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return [value, onChangeInput];
};

export default useInput;
