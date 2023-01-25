import React from 'react'
import styles from './input-styles.scss'

type OwnerProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input: React.FC<OwnerProps> = (props: OwnerProps) => {
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={styles.inputWrapper}>
      <input {...props} readOnly onFocus={enableInput} />
      <span className={styles.status}>🔴</span>
    </div>
  )
}
