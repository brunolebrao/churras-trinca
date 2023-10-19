import React, { useCallback, useEffect, useState } from 'react'
import { Button } from 'components/Button'
import { TextField } from 'components/TextField'
import * as S from './styles'
import { useAuth } from 'services/hooks/useAuth'
import { Loading } from 'components/Loading'

const LoginTemplate = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [formError, setFormError] = useState('')
  const { loading, signIn, authError } = useAuth()

  useEffect(() => {
    setFormError(authError && authError)
  }, [authError])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      // sign in
      signIn(values)
    },
    [signIn, values]
  )

  return (
    <S.Wrapper>
      <S.Content onSubmit={handleSubmit}>
        <TextField
          label="Login"
          placeholder="e-mail"
          type="email"
          onInputChange={(v) => handleInput('email', v)}
        />
        <TextField
          label="Senha"
          placeholder="senha"
          type="password"
          onInputChange={(v) => handleInput('password', v)}
        />
        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <Loading /> : 'Entrar'}
        </Button>
        {!!formError && formError}
      </S.Content>
    </S.Wrapper>
  )
}
export default LoginTemplate
