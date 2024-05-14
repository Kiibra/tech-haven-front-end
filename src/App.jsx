// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import DeviceList from './pages/DeviceList/DeviceList'
import DeviceDetails from './pages/DeviceDetails/DeviceDetails'
import NewDevice from './pages/NewDevice/NewDevice'
import EditDevice from './pages/EditDevice/EditDevice'
import EditOffer from './pages/EditOffer/EditOffer'

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
  const [devices, setDevices] = useState([])
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

  const handleDeleteDevice = async deviceId => {
    const deletedDevice = await deviceService.delete(deviceId)
    setDevices(devices.filter(device => device._id !== deletedDevice._id))
    navigate('/devices')
  }

  const handleAddDevice = async deviceFormData => {
    const newDevice = await deviceService.create(deviceFormData)
    setDevices([newDevice, ...devices])
    navigate('/devices')
  }

  const handleUpdateDevice = async deviceFormData => {
    const updatedDevice = await deviceService.update(deviceFormData)
    setDevices(devices.map(device => updatedDevice._id === device._id ? updatedDevice : device))
    navigate('/devices')
  }

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
              <DeviceDetails user={user} handleDeleteDevice={handleDeleteDevice}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/devices/new" 
          element={
            <ProtectedRoute user={user}>
              <NewDevice handleAddDevice={handleAddDevice}/>
            </ProtectedRoute>
          }
        />
        <Route 
          path='/devices/edit' element={
            <ProtectedRoute user={user}>
              <EditDevice handleUpdateDevice={handleUpdateDevice} />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/devices/:deviceId/offers/edit' element={
            <ProtectedRoute user={user}>
              <EditOffer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
