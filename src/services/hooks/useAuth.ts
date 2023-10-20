import { useCallback, useState } from 'react'
import { api } from 'services/api'

type Auth = {
  email: string
  password: string
}

export const useAuth = () => {
  const [authError, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [go, setGo] = useState('')

  const signIn = useCallback(({ email, password }: Auth) => {
    setLoading(true)
    setError('')
    api
      .get('auth', {
        params: {
          email,
          password
        }
      })
      .then((response) => {
        console.log('%c⧭', 'color: #00e600', response.data)
        setLoading(false)
        setGo(response.data)
      })
      .catch((error) => {
        console.log('%c⧭', 'color: #e50000', error.response.data)
        setError(error.response.data.errors)
        setLoading(false)
      })
    setLoading(true)
  }, [])

  return {
    go,
    loading,
    authError,
    signIn
  }
}
