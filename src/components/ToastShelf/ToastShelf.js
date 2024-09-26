import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleRemoveToast}) {

  return (
    <ol className={styles.wrapper} aria-live="polite" aria-label='notifications'>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} handleRemoveToast={handleRemoveToast} variant={toast.variant}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
