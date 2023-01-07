import React, { memo } from 'react'
import styles from './footer-styles.scss'

const RawFooter: React.FC = () => <footer className={styles.footer} />

export const Footer = memo(RawFooter)
