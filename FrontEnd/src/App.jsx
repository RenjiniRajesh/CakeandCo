import NavBarComponent from "./components/NavBar";
import "./App.css"
import RoutePaths from "./components/Routes/route";
const App = () => {
  return (
    <div className="App">
      <NavBarComponent />
      <RoutePaths/>
    </div>
  );
};

export default App;