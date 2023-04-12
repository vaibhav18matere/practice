import "./App.css";
import TimerWrapper from "./Timer/TimerWrapper";

function App() {
  const onExpired = () => {
    console.log("expired the callback function");
  };

  return (
    <div className="App">
      <TimerWrapper onExpired={onExpired} duration={15 * 1000} />
      {/* change the timer duration from here */}
    </div>
  );
}

export default App;
