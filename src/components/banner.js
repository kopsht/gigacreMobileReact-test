import React from 'react';

let indexBannerImage=require('../images/phone-index_01.png')

// console.log(indexBannerImage);
class BannerComponent extends React.Component {
  render() {
    return (
    	<div className="banner">
        <img src={indexBannerImage} alt=""/>
        <h1>首个互联网工业地产招商生态圈</h1>
        <span id="searchBox">
            <i className="fa fa-search"></i>
            请输入关键词
        </span>
    </div>
    );
  }
}

BannerComponent.defaultProps = {
};

export default BannerComponent;
