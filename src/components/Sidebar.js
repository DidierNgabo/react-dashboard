import React from 'react';
import {
  AssessmentOutlined,
  AttachMoney,
  ChatBubbleOutlineOutlined,
  DynamicFeed,
  LineStyle,
  MailOutlined,
  PermIdentityOutlined,
  ReportOutlined,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarItem active">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUp className="sidebarIcon" /> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users">
              <li className="sidebarItem active">
                <PermIdentityOutlined className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/products">
              <li className="sidebarItem">
                <Storefront className="sidebarIcon" /> Products
              </li>
            </Link>
            <li className="sidebarItem">
              <AttachMoney className="sidebarIcon" /> Transactions
            </li>
            <li className="sidebarItem">
              <AssessmentOutlined className="sidebarIcon" /> Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem active">
              <MailOutlined className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarItem">
              <DynamicFeed className="sidebarIcon" /> FeedBack
            </li>
            <li className="sidebarItem">
              <ChatBubbleOutlineOutlined className="sidebarIcon" />{' '}
              Notifications
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarItem active">
              <WorkOutline className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarItem">
              <Timeline className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarItem">
              <ReportOutlined className="sidebarIcon" /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
