require('normalize.css/normalize.css');
require('styles/t-index.less')

import React from 'react';
import banner from './banner'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="main">
       <banner/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
