import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import ProtectedRoute from './components/ProtectedRoute'
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={
        
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        
      } />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
