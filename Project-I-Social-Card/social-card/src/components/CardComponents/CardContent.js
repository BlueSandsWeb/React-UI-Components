import React from 'react';
import './Card.css';

function CardContent() {
  return (
    <div className="CardContent">
      <h5 className="CardContentTitle">Get started with React</h5>
      <p className="CardContentParagraph">React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <a className="CardContentLink" href="#">reactjs.org</a>
    </div>
  );
}

export default CardContent;