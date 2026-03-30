import { useState } from 'react';
import './ProjectModal.css';

function ProjectModal({ children, onClose }) {
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    setTimeout(onClose, 250);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <div
      className={`modal-overlay ${closing ? 'fade-out' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={`modal modal--split ${closing ? 'scale-out' : ''}`}>
        <button className="modal__close" onClick={closeModal}>
          ✕
        </button>

        <div className="modal__scroll">{children}</div>
      </div>
    </div>
  );
}

export default ProjectModal;
