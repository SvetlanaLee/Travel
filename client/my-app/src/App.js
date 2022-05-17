import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <Routes>
          {/* <Route path="/test" element={<PageTest />} /> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
