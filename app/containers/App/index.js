/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RequestForm from 'containers/RequestForm/Loadable';
import InformationForm from 'containers/InformationForm/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App () {
  return (
    <AppWrapper>
      <Helmet titleTemplate="CCCD" defaultTitle="CCCD">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route exact path="/" component={RequestForm} />
        {/* <Route path="/features" component={InformationForm} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer />
      <GlobalStyle /> */}
    </AppWrapper>
  );
}
