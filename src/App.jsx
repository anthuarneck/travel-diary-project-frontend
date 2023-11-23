import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Components/UserComponents/UserContext"

import NavBar from "./Components/NavBar"

import Index from "./Pages/Index"
import Show from "./Pages/Show"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/destinations" element={<Index />} />
          <Route path="/destinations/:id/memories" element={<Show />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
