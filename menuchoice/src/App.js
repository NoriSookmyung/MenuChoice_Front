import { BrowserRouter, Route, Routes} from "react-router-dom";

import ResultPage from "./pages/ResultPage";
import ResultPageList from "./pages/ResultPageList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/resultpage" element={<ResultPage />} />
          <Route path="/resultpagelist" element={<ResultPageList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;