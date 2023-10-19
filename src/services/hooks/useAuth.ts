import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

type Auth = {
  email: string
  password: string
}

export const useAuth = () => {
  const routes = useRouter()
  const [authError, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { push } = routes

  const signIn = useCallback(
    ({ email, password }: Auth) => {
      setLoading(true)
      if (email && password) {
        setTimeout(() => {
          setLoading(false)
          return push('/agenda')
        }, 2000)
      } else {
        setTimeout(() => {
          setLoading(false)
          setError('Usuário ou senha inválidos')
        }, 2000)
      }
    },
    [push]
  )

  return {
    loading,
    authError,
    signIn
  }
}
