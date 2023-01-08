import React from 'react'
import styles from './form-status-styles.scss'

import { Spinner } from '@/presentation/components'

export const FormStatus: React.FC = () => (
  <div className={styles.errorWrapper}>
    <Spinner className="spinner" />
    <span className={styles.error}>Error</span>
  </div>
)
