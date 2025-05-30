import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import About from "@/pages/About";
import History from "@/pages/History";
import GastroTour from "@/pages/GastroTour";
import Markets from "@/pages/Markets";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/gastro-tour" element={<GastroTour />} />
            <Route path="/markets" element={<Markets />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
