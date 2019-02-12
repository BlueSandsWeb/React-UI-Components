import React from 'react';
import './Header.css';

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; //January is 0!
let yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;


function HeaderTitle() {
  return (
    <div className="HeaderTitle">
      <h4 className="CardHeaderTitle">Lambda School</h4>
      <a href="#" className="handle">@LambdaSchool</a><span>&#8226; {today}</span>
    </div>
  );
}

export default HeaderTitle;