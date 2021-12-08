import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

import Banner from './components/Banner';
import ClassSelect from './layouts/ClassSelect';
import AboutLayout from './layouts/About';

const client = new ApolloClient({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Banner />
      <Routes>
        <Route path="/" element={<ClassSelect />} />
        <Route path="/about" element={<AboutLayout />} />
      </Routes>
    </ApolloProvider>
  );
};

export default App;