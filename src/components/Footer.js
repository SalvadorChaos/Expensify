import React from 'react';
import { connect } from 'react-redux';

export const Footer = () => (
  <footer className="footer">
    <p>Made with ❤ by 
      <a href="http://twitter.com/SalvadorChaos" className="twitter-link"> @SalvadorChaos
      </a>
    </p>
  </footer>
);

export default connect()(Footer);
