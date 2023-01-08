import React from 'react'
import styles from './input-styles.scss'

type OwnerProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const Input: React.FC<OwnerProps> = (props: OwnerProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input {...props} />
      <span className={styles.status}>🔴</span>
    </div>
  )
}
