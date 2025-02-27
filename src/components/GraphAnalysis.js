import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Fundamental from './Fundamental';
import Technical from './Technical';
import Competitor from './Competitor';
import RiskAssessment from './RiskAssessment';
import Sentiment from './Sentiment';

const GraphAnalysis = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/fundamental`} component={Fundamental} />
        <Route path={`${path}/technical`} component={Technical} />
        <Route path={`${path}/competitor`} component={Competitor} />
        <Route path={`${path}/risk-assessment`} component={RiskAssessment} />
        <Route path={`${path}/sentiment`} component={Sentiment} />
      </Switch>
    </div>
  );
};

export default GraphAnalysis;
