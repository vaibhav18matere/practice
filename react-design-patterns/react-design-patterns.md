## Design Patterns
- Book - Design Patterns : Elements of reusable object oriented software - By Eric Gamma, Richard Helm, Ralph Johnson, John Vlisside

#### Can you write a code which is readable, maintanable and highly scalable? thats nothing but a design pattern.
### Types of design patterns :
## (A) CREATIONAL:
     1. Singleton
     2. Prototype
     3. Builder
     4. Factory 
## (B) STRUCTURAL:
     1. Facade
     2. Proxy 
## (C) BEHAVIOURAL:
     1. Iterator
     2. Observer
     3. Mediator
     4. State
# 1. Singleton Pattern 
- We enforce a perticular class or service to have only one instance throught our project.
- Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.
- example - Chat app, when socket connection is build it should not re-render again and again.

```jsx

// socket.js

let instance = null;

class SocketService {
  constructor() {
    if (!instance) {   // here we are checking if instance is already available
      console.log("IO conection built");
      instance = this; // if it is there then we are accessing it 
    }

    return instance; // and returning that instace
  }

  sendData() {
    console.log("Send Data on IO");
  }
}

export default SocketService;
```
```jsx

// app.js

import React, { useState } from "react";
import SocketService from "./socket";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState(1);
  const socket = new SocketService();

  return (
    <div className="App">
      <button onClick={(e) => setState((s) => s + 1)}>{state}</button>
    </div>
  );
}

export default App;

```

