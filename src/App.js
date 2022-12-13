import "./App.css";
import FirstPage from "./FirstPage/FirstPage";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      {data.products.map((info) => {
        return <FirstPage info={info}> </FirstPage>;
      })}
    </div>
  );
}

export default App;
