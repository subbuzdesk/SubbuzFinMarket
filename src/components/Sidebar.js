import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/graph-analysis">Graph Analysis</Link></li>
        <ul>
          <li><Link to="/graph-analysis/fundamental">Fundamental</Link></li>
          <li><Link to="/graph-analysis/technical">Technical</Link></li>
          <li><Link to="/graph-analysis/competitor">Competitor</Link></li>
          <li><Link to="/graph-analysis/risk-assessment">Risk Assessment</Link></li>
          <li><Link to="/graph-analysis/sentiment">Sentiment</Link></li>
        </ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logoff">Log Off</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
