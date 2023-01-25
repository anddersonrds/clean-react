import React, { useState } from 'react'
import styles from './login-styles.scss'

import Context from '@/presentation/contexts/form/form-context'

import {
  Footer,
  FormStatus,
  Input,
  LoginHeader
} from '@/presentation/components'

type LoginStateProps = {
  isLoading: boolean
  errorMessage: string
}

export const Login: React.FC = () => {
  const [loginState] = useState<LoginStateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={loginState}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button className={styles.submit} type="submit">
            Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}
