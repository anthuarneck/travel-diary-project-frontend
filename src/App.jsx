import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Components/UserComponents/UserContext"

import NavBar from "./Components/NavBar"

import Index from "./Pages/Index"
import Show from "./Pages/Show"
import ShowMemory from "./Pages/ShowMemory"
import NewDestination from "./Pages/NewDestination"
import EditDestination from "./Pages/EditDestination"
import NewMemory from "./Pages/NewMemory"
import Error from "./Pages/Error"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/destinations" element={<Index />} />
          <Route path="/destinations/:id/memories" element={<Show />} />
          <Route path="/destinations/:id/memories/:memoryId" element={<ShowMemory />} />
          <Route path="/destinations/new" element={<NewDestination />} />
          <Route path="/destinations/:id/edit" element={<EditDestination />} />
          <Route path="/destinations/:id/memories/new" element={<NewMemory />} />

          <Route path="*" element={<Error />} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
