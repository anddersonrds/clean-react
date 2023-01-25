import React, { useContext } from 'react'
import styles from './form-status-styles.scss'

import Context from '@/presentation/contexts/form/form-context'
import { Spinner } from '@/presentation/components'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div data-testid="error-wrap" className={styles.errorWrapper}>
      {isLoading && <Spinner className="spinner" />}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  )
}
