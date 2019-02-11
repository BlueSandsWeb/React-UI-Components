import React from 'react';
import './Header.css';

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <h4 className="CardHeaderTitle">Lambda School</h4>
      <a href="#" className="handle">@LambdaSchool</a><span>&#8226; 26 jan</span>
    </div>
  );
}

export default HeaderTitle;