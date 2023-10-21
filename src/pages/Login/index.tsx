import React, { useCallback, useEffect, useState } from 'react';

import { Button } from 'components/Button';
import { Loading } from 'components/Loading';
import { TextField } from 'components/TextField';

import * as S from './styles';

import { useAuth } from 'context/auth/useAuth';

const LoginTemplate = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState('');
  const { onSignIn, loading } = useAuth();

  useEffect(() => {
    if (values.email && values.password) {
      setFormError('');
    }
  }, [values.email, values.password]);

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      setFormError('');
      if (!values.email || !values.password) {
        setFormError('Preencha todos os campos');
        return;
      }

      onSignIn(values);
    },
    [onSignIn, values]
  );

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
  );
};
export default LoginTemplate;
