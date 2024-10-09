import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Headers from "./components/Headers"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Blog from "./pages/Blog"
function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
