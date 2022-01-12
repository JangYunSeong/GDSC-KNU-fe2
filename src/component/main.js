import "../styles/App.css";
import Navigation from"./main/Navigation";
import Cards from "./main/Cards";
import Sidebar from "./main/Sidebar";

function App() {
  return (
    <div className="App">
     <Navigation/>
     <main>
       <div className = "container">
          <Cards/>
          <Sidebar/>
       </div>
     </main>
    </div>
  );
};

export default App;
