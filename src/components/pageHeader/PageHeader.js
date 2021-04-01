import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import Image from '../image/Image';
import Modal from '../modal/Modal';
import ModalData from '../modal/ModalData';
import PageHeaderData from './PageHeaderData';

const PageHeader = () => {
  const [modalActive, setModalActive] = useState(false)

  const setOverflowBody = overflowValue => document.getElementsByTagName('body')[0].style.overflow = overflowValue

  useEffect(() => {
    if(!modalActive) window.location.hash = ""

    return modalActive ? setOverflowBody('hidden') : setOverflowBody('auto')
  }, [modalActive])

  return (
    <div className="page-header">
      <div className="page-header__top-bar">
        <span className="page-header__text page-header__text--large page-header__text--bold">{PageHeaderData.topBarTextBold}</span>
        <span className="page-header__text ">{PageHeaderData.topBarText}</span>
      </div>
      <div className="page-header__content">
        <div className="page-header__description">
          <h1 className="page-header__title page-header__title--bold">{PageHeaderData.title}</h1>
          <h2 className="page-header__title">{PageHeaderData.subtitle}</h2>
          <div className="page-header-buttons page-header-buttons--desktop">
            {PageHeaderData.buttons.map(({text, modifier}, index) => {
              return (
                <Button
                  key={`${text}--${index}`}
                  onClick={() => setModalActive(true)}
                  modifier={modifier}
                  text={text}
                />
              )
            })}
          </div>
        </div>
        <div className="page-header__image-container">
          { PageHeaderData.imagesMob.map(({webp, src, alt, modifier}, index) => {
            return (
              <Image
                key={`${src}--${index}`}
                modifier={modifier}
                image={{
                  webp: webp,
                  src: src,
                  alt: alt
                }}
              />
            )
          })}
        </div>
        <div className="page-header__image-container page-header__image-container--desktop">
          { PageHeaderData.imagesDesk.map(({webp, src, alt, modifier}, index) => {
            return (
              <Image
                key={`${src}--${index}`}
                modifier={modifier}
                image={{
                  webp: webp,
                  src: src,
                  alt: alt
                }}
              />
            )
          })}
        </div>
        <div className="page-header-buttons">
          {PageHeaderData.buttons.map(({text, modifier}, index) => {
            return (
              <Button
                key={`${text}--${index}`}
                onClick={() => setModalActive(true)}
                modifier={modifier}
                text={text}
              />
            )
          })}
        </div>
        {modalActive &&
          <Modal
            ModalData={ModalData}
            modalActive={modalActive}
            onClick={() => setModalActive(false)}
            onEscape={() => setModalActive(false)}/>}
      </div>
    </div>
  );
};

export default PageHeader;
