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

4.  update parent state from child
```javascript
import { useState } from "react";
import { Child } from "./Child";

const Parent = () => {
  const [text, setText] = useState("initial text");

  return (
    <>
      <section>
        <h3>Parent Component</h3>
        <div> update parent state from child</div>
        <h2>{text}</h2>
      </section>
      <Child setText={setText} />
    </>
  );
};

export default Parent;

```
```javascript
export const Child = ({ setText }) => {
  const clcikHandler = () => {
    setText("changed.....!!");
  };
  return (
    <section>
      <h3>Child Component</h3>
      <button onClick={clcikHandler}>Click to update parent state</button>
    </section>
  );
};

```
5. react composition - add child components inside parent component

```javascript
// ParentChild.jsx
export const ParentComponent = ({ children }) => {
  return (
    <>
      <div className="parent">
        <h1>Parent Component</h1>
        {children}
        <small>bonus : read more about "react composition"</small>
      </div>
    </>
  );
};

export const ChildComponent1 = () => {
  return <div>Child Component 1</div>;
};

export const ChildComponent2 = () => {
  return <div>Child Component 2</div>;
};

```
```javascript
// App.js
      <ParentComponent>
        <ChildComponent1 />
        <ChildComponent2 />
      </ParentComponent>
```
6. Fetch Data from API
```javascript
import React, { useState, useEffect } from "react";
export const FetchData = () => {
  const [userData, setUserData] = useState({});

  const { name, UserName, email, phone, website } = userData;

  const dataUrl = "https://jsonplaceholder.typicode.com/users/1";

  const getUserData = async () => {
    const response = await fetch(dataUrl);
    const jsonData = await response.json();
    // console.log(jsonData);
    setUserData(jsonData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="data-from-api">
      <h3>Fetch data from the API</h3>
      <div>Name : {name} </div>
      <div>UserName :{UserName} </div>
      <div>Email : {email} </div>
      <div>Phone : {phone} </div>
      <div>Website : {website} </div>
      <small>bonus : read about axios</small>
    </div>
  );
};

```
