import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>

        </Routes>
      </Router>
    </div>
  )
}

export default App
