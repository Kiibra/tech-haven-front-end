// services
//import token services so we have access 
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/devices`



async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(deviceId) {
  try {
    const res = await fetch(`${BASE_URL}/${deviceId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(deviceFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deviceFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(deviceFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${deviceFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deviceFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteDevice(deviceId) {
  try {
    const res = await fetch(`${BASE_URL}/${deviceId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteDevice as delete,
}