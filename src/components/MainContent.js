import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Portfolio from './Portfolio';
import GraphAnalysis from './GraphAnalysis';
import Profile from './Profile';
import LogOff from './LogOff';

const MainContent = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/graph-analysis" component={GraphAnalysis} />
        <Route path="/profile" component={Profile} />
        <Route path="/logoff" component={LogOff} />
      </Switch>
    </div>
  );
};

export default MainContent;
