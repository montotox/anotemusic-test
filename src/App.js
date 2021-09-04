import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Isologo from "./assets/img/isologo.svg";
import Balance from "./components/Card/Balance";
import Catalogues from "./components/Card/Catalogues";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Drawer />
      <img src={Isologo} alt="isologo" className="App__isologo" />
      <Balance />
      <Catalogues />
      by Montotox
      <Navbar />
    </div>
  );
}

export default App;
