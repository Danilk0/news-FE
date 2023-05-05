import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import NewsList from "./components/newsList/NewsList";
import News from "./components/newsModal/News";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<NewsList/>} />
                <Route path="/modal" element={<News/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
