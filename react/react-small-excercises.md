### small bit sized react-excercises

1. Show/hide an element on clicking on button

```jsx
import { useState } from "react";

export const ShowHide = () => {
  const clickHandler = () => {
    setShow(!show);
  };

  const [show, setShow] = useState(false);
  return (
    <section>
      <h3>Show/Hide an element</h3>
      <button onClick={clickHandler}>
        {!show ? "Click to see Secret" : "Now, hide it"}
      </button>
      {show && <h4>SECRET CODE IS : VPM18897</h4>}
    </section>
  );
};
```


2.  Two way data binding - show the text on UI - what's being type in an input box


```jsx

import { useState } from "react";

export const UpdateData = () => {
  const [showText, setShowText] = useState("");

  const onChangeHandler = (e) => {
    setShowText(e.target.value);
  };

  return (
    <section>
      <h3>
        Two way data binding - show the text on UI what's being type in an input
        box
      </h3>
      <label>Enter Input here : </label>
      <input
        onChange={(e) => onChangeHandler(e)}
        type="text"
        placeholder="write anything here"
      />
      <h4>{showText}</h4>
    </section>
  );
};
```


3.  Disable the button when there is no input typed by user and enable it as soon as he type something

```jsx

import { useState } from "react";

export const ConditionalDisableBtn = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <section>
      <h3>
        Disable the button when there is no input typed by user and enable it as
        soon as he type something
      </h3>
      <label>Enter Input here : </label>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
        placeholder="write anything here"
      />
      <button disabled={inputVal.length < 1}>Submit the form</button>
      <small style={{ display: "block" }}>
        bonus: read more about "controlled component in react"
      </small>
    </section>
  );
};
```
