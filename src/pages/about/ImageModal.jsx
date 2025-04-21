import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // accessibility için gerekli

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Resim Önizleme"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1000
        },
        content: {
          inset: '10%',
          padding: '0',
          border: 'none',
          background: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
    >
      <img
        src={imageUrl}
        alt="Büyütülmüş Görsel"
        style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '10px' }}
      />
    </Modal>
  );
};

export default ImageModal;
