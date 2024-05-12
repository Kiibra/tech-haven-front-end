// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import DeviceList from './pages/DeviceList/DeviceList'
import DeviceDetails from './pages/DeviceDetails/Devicedetails'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as deviceService from './services/deviceService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [devices, setDevices] = useState({})
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllDevices = async () => {
      //API CALL
      const devicesData = await deviceService.index()
      setDevices(devicesData) // <-- Set state with the data returned
    }
    if (user) fetchAllDevices() // <-- Only run the function(to display device data) if we have a user!!

    //user is in dependecies b/c everytime there is a user, want to display devices and if there isnt a user, we need to update state to be empty
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/devices"
          element={
            <ProtectedRoute user={user}>
              <DeviceList devices={devices}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/devices/:deviceId"
          element={
            <ProtectedRoute user={user}>
              <DeviceDetails />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
