import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'AliceBlue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5, width: '80%', maxWidth: 500 }}>
                <button onClick={closeModal} style={{ marginLeft: 'auto', display: 'block', border: 'none', background: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;