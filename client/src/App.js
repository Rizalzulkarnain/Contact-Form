import React from 'react';

import Title from './components/Tittle';
import ContactForm from './components/ContactForm';

import { GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title />
      <ContactForm />
    </>
  );
};

export default App;
