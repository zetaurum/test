import { createState, useState } from '@hookstate/core'
import { useRouter } from 'next/dist/client/router'
import bcrypt from 'bcryptjs'

const USERS = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '$2a$10$m0sMUSyoOsmfWtkYDniZfe.DfWZkjE7RZzB9X68kJejZMaNAH/tT.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    password: '$2a$10$m0sMUSyoOsmfWtkYDniZfe.DfWZkjE7RZzB9X68kJejZMaNAH/tT.'
  }
]

const WRONG_CREDENTIALS_ERROR_MESSAGE = 'Wrong credentials'
const AUTHENTICATION_LOCAL_STORAGE_KEY = 'auth_key'

const INITIAL_STATE = {
	isLoading: true,
	isAuthenticated: false,
	user: null
}

const AUTH_STATE = createState(INITIAL_STATE)


export default function useAuthentication () {
  const router = useRouter()
  const authState = useState(AUTH_STATE)

  const checkIfUserIsAuthenticated = () => {
    const userId = localStorage.getItem(AUTHENTICATION_LOCAL_STORAGE_KEY)

    if(!userId) {
      authState.set({
        isLoading: false,
        isAuthenticated: false,
        user: null
      })
      return router.replace('/')
    } 

    const user = USERS.find(({id}) => id === userId)
    authState.set({
      isLoading: false,
      isAuthenticated: true,
      user
    })
  }

  const login = ({email, password}) => new Promise((resolve, reject) => {
    const user = USERS.find((user) => user.email === email)
    if(!user) return reject(WRONG_CREDENTIALS_ERROR_MESSAGE)
    
    const isCorrectPassword = bcrypt.compareSync(password, user.password)
    if(!isCorrectPassword) {
      return reject(WRONG_CREDENTIALS_ERROR_MESSAGE)
    }

    localStorage.setItem(AUTHENTICATION_LOCAL_STORAGE_KEY, user.id)
    authState.set({
      isLoading: false,
      isAuthenticated: true,
      user
    })
    resolve()
  })

  const logout = () => {
    localStorage.removeItem(AUTHENTICATION_LOCAL_STORAGE_KEY)
    authState.set({
      isLoading: false,
      isAuthenticated: false,
      user: null
    })
    router.replace('/')
  }

  return {
    ...authState.get(),
    login,
    logout,
    checkIfUserIsAuthenticated
  }
}