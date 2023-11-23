import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Components/UserComponents/UserContext"

import NavBar from "./Components/NavBar"

import Index from "./Pages/Index"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/destinations" element={<Index />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
