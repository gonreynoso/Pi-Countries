import React from 'react';
import styles from './notFoundPage.module.css';
import { Link } from 'react-router-dom';
import gifImage from '../../Assets/giphy.gif';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <img src={gifImage} alt="Error GIF" className={styles.gif} />
      <h1 className={styles.title}>Error 404: Página no encontrada</h1>
      <p className={styles.message}>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/home" className={styles.link}>Volver a la página de inicio</Link>
    </div>
  );
};