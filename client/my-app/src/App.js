import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import PageHome from "./pages/PageHome";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <Routes>
          <Route path="/" element={<PageHome />} />
          {/* <Route path="/test" element={<PageTest />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
