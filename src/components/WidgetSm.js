import { Visibility } from '@material-ui/icons';
import React from 'react';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="wSmTitle">New Join Members</span>
      <ul className="wSmList">
        <li className="wSmItem">
          <img src="/jone.jpeg" alt="john doe" className="wSmImg" />
          <div className="wSmUser">
            <span className="wSmUsername">John Doe</span>
            <span className="wSmJob">Software Engineer</span>
          </div>
          <button className="wSmButton">
            <Visibility className="wSmIcon" /> Display
          </button>
        </li>
        <li className="wSmItem">
          <img src="/jone.jpeg" alt="john doe" className="wSmImg" />
          <div className="wSmUser">
            <span className="wSmUsername">John Doe</span>
            <span className="wSmJob">Software Engineer</span>
          </div>
          <button className="wSmButton">
            <Visibility className="wSmIcon" /> Display
          </button>
        </li>
        <li className="wSmItem">
          <img src="/jone.jpeg" alt="john doe" className="wSmImg" />
          <div className="wSmUser">
            <span className="wSmUsername">John Doe</span>
            <span className="wSmJob">Software Engineer</span>
          </div>
          <button className="wSmButton">
            <Visibility className="wSmIcon" /> Display
          </button>
        </li>
        <li className="wSmItem">
          <img src="/jone.jpeg" alt="john doe" className="wSmImg" />
          <div className="wSmUser">
            <span className="wSmUsername">John Doe</span>
            <span className="wSmJob">Software Engineer</span>
          </div>
          <button className="wSmButton">
            <Visibility className="wSmIcon" /> Display
          </button>
        </li>
        <li className="wSmItem">
          <img src="/jone.jpeg" alt="john doe" className="wSmImg" />
          <div className="wSmUser">
            <span className="wSmUsername">John Doe</span>
            <span className="wSmJob">Software Engineer</span>
          </div>
          <button className="wSmButton">
            <Visibility className="wSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
