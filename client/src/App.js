import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Saved />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="*" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
