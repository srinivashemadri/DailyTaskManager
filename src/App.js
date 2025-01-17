import NavBar from "./Components/NavBar";
import { GlobalContext } from "./Context/GlobalContext";
import Router from "./Router/Router";



function App() {
  return (
    <GlobalContext.Provider>
        <NavBar/>
        <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
