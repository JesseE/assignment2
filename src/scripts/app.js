import React from 'react';
import Faq from '../components/faq/Faq';
import FAQData from '../components/faq/FaqData';
import PageHeader from '../components/pageHeader/PageHeader';

const App = () => {
  return (
    <div>
      <PageHeader />
      <Faq FAQList={FAQData} />
    </div>
  );
};

export default App;
