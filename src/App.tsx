import Heading from "./Heading";
import Sidebar from "./components/Sidebar";
import Guidelines from "./components/Guidelines";
import Tutorials from "./components/Tutorials";
import About from "./components/About";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

function App(){
  return <div>
    {/*<Sidebar></Sidebar>*/}
    {/*<Heading></Heading>*/}
    {/*<Guidelines></Guidelines>*/}
    {/*<Tutorials></Tutorials>*/}
    {/*<About></About>*/}

    <Router>
      <Sidebar />
      <Routes>
        <Route path="/Heading" element={<Heading></Heading>}/>
        <Route path="/Guidelines" element={<Guidelines></Guidelines>}/>
        <Route path="/Tutorials" element={<Tutorials></Tutorials>}/>
        <Route path="/About" element={<About></About>}/>
        
      </Routes>
    </Router>
  </div>;
}

export default App;