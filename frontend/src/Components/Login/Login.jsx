import React from 'react';

const Login = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Login;
