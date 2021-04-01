import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import Image from '../image/Image';

const Modal = ({ ModalData, modalActive, onClick, onEscape }) => {
  const linkEl = useRef(null)

  useEffect(() => {
    document.addEventListener('keydown', (e) => e.code === 'Escape' ? onEscape() : null)

    if(modalActive) {
      linkEl.current.focus()
    }

    return document.removeEventListener('keydown', onEscape)
  }, [modalActive])

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal__bg" onClick={onClick}></div>
      <div className="modal__content">
        <div className="modal__top-bar">
          <span>{ModalData.title}</span>
        </div>
        { ModalData.images.map(({image, title, description, price, target}, index) => {
          return (
            <a href={`#${target}`}
              className="modal__item"
              key={`${title}--${index}`}
              ref={(index === 0) ? linkEl : null}>
              <div className="modal__image-container">
                <Image
                  image={{
                    webp: image.webp,
                    src: image.src,
                    alt: image.alt
                  }}
                />
              </div>
              <h3 className="modal__item-title">{title}</h3>
              <p className="modal__item-description">{description}</p>
              <span className="modal__item-price"
                dangerouslySetInnerHTML={{__html: `&#8364;${price}`}}></span>
            </a>
          )
        })}
        <Button onClick={onClick} modifier="button--primary" text="Close" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  ModalData: PropTypes.object,
  onClick: PropTypes.func,
  onEscape: PropTypes.func,
  modalActive: PropTypes.bool
};

export default Modal;
