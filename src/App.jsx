import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Components/UserComponents/UserContext"

import NavBar from "./Components/NavBar"

import Index from "./Pages/Index"
import Show from "./Pages/Show"
import ShowMemory from "./Pages/ShowMemory"
import Error from "./Pages/Error"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/destinations" element={<Index />} />
          <Route path="/destinations/:id/memories" element={<Show />} />
          <Route path="/destinations/:id/memories/:memoryId" element={<ShowMemory />} />

          <Route path="*" element={<Error />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
