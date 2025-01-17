import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => setVisible(false), 10000);
        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        visible && (
            <div style={popupStyle}>
                Chat with us on <a href="https://wa.me/+923183561921" target="_blank" rel="noopener noreferrer">WhatsApp</a>!
            </div>
        )
    );
};

const popupStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25d366',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
};

export default Popup;
