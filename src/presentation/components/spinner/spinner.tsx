import React from 'react'
import styles from './spinner-styles.scss'

type OwnerProps = React.HTMLAttributes<HTMLElement>

export const Spinner: React.FC<OwnerProps> = (props: OwnerProps) => (
  <div className={[styles.spinner, props.className].join(' ')}>
    <div />
    <div />
  </div>
)
