import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <h4 className="CardHeaderTitle">Lambda School</h4>
      <a href="#" className="handle">@LambdaSchool</a><span>&#8226; {moment().format("MMM Do")}</span>
    </div>
  );
}

export default HeaderTitle;