import React from 'react';
import './News.css'
import train1 from './train1.jpg';
import train2 from './train2.jpg';
import election1 from './election1.jpg';
import election2 from './election2.jpg';
import bank from './bank.jpg';

function News() {
  return (
    <div className="App">
      <div className="container">
        <div className="news-section">
          <div className="news-card">
            <img src={train1} alt="Puja special trains" />
            <p>Puja special trains: Time revised</p>
          </div>
          <div className="news-card">
            <img src={train2} alt="Southern Railways" />
            <p>Southern Railways to operate Puja Special trains</p>
          </div>
          <div className="news-card">
            <img src= {election1} alt="JK polls" />
            <p>JK polls: NC-Cong alliance crosses halfway mark</p>
          </div>
          <div className="news-card">
            <img src={election2}alt="BJP leads" />
            <p>PM Modi’s BJP leads in vote count in Haryana</p>
          </div>
        </div>

        <div className="ad-section">
          <img src={bank} alt="Federal Bank Ad" className="ad-image" />
        </div>
      </div>
    </div>
  );
}

export default News;
