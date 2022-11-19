import * as api from '../api'
import { AUTH } from '../constants/actionTypes'

export const signin = (formData, navigate) => async (dispath) => {
  try {
    // log in the user
    const { data } = await api.signIn(formData)
    dispath({ type: AUTH, data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}

export const signup = (formData, navigate) => async (dispath) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData)
    dispath({ type: AUTH, data })
    navigate('/')
  } catch (error) {
    console.log(error)
  }
}
