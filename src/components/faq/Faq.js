import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Faq = ({ FAQList }) => {
  const [listState, setListState] = useState(FAQList.list)

  const faqItemStateHandler = targetIndex => {
    const updatedList = listState.map((listItem, index) => {
      return {
        ...listItem,
        isOpen: (targetIndex === index) ? listItem.isOpen = !listItem.isOpen : listItem.isOpen = false
      }
    })

    setListState(updatedList)
  }

  const handleKeyboardSupport = (e, index) => {
    if(e.code === 'Tab' || e.code === 'ShiftLeft') return null
    if(e.code === 'Space' || e.code === 'Enter') return faqItemStateHandler(index)
  }

  return (
    <div className="faq">
      <h3 className="faq-title">{FAQList.title}</h3>
      <div className="faq-content">
        { listState.map(({title, isOpen, description}, index) => {
          return (
            <div
              className={`faq-item ${isOpen ? 'faq-item--selected': ''}`}
              onClick={() => faqItemStateHandler(index)}
              onKeyDown={(e) => handleKeyboardSupport(e, index)}
              key={`${title}--${index}`}
              tabIndex="0"
            >
              <span className="faq-item__title">{title}</span>
              <div className={`faq-item__detail ${isOpen ? 'faq-item__detail--open': ''}`}>
                <span className="faq-item__description">{description}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

Faq.propTypes = {
  FAQList: PropTypes.object,
};

export default Faq;
