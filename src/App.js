
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./add/Add";
import Div from "./div/Div";
import Mul from "./mul/Mul";
import Sub from "./sub/Sub";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="add/:a/:b" element={<Add/>}/>
          <Route path="sub/:a/:b" element={<Sub/>}/>
          <Route path="mul/:a/:b" element={<Mul/>}/>
          <Route path="div/:a/:b" element={<Div/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
