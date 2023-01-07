import React, { memo } from 'react'
import styles from './login-header-styles.scss'

import { Logo } from '../logo/logo'

const RawLoginHeader: React.FC = () => (
  <header className={styles.header}>
    <Logo />
    <h1>Enquetes para programadores</h1>
  </header>
)

export const LoginHeader = memo(RawLoginHeader)
