import React from 'react';
import Button from './Button';

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="wLgTitle">Latest Transactions</h3>
      <table className="wLgTable">
        <tr className="wLgTr">
          <th className="wLgTh">Customer</th>
          <th className="wLgTh">Date</th>
          <th className="wLgTh">Amount</th>
          <th className="wLgTh">Status</th>
        </tr>
        <tr className="wLgTr">
          <td className="wLgUser">
            <img src="/jone.jpeg" alt="customer" className="WLgImg" />
            <span className="wLgName">Susan Carol</span>
          </td>
          <td className="wLgDate">2 Jun 2021</td>
          <td className="wLgAmount">65,000 RWF</td>
          <td className="wLgStatus">
            <Button status="Approved" />
          </td>
        </tr>
        <tr className="wLgTr">
          <td className="wLgUser">
            <img src="/profile.jpg" alt="customer" className="WLgImg" />
            <span className="wLgName">Susan Carol</span>
          </td>
          <td className="wLgDate">2 Jun 2021</td>
          <td className="wLgAmount">65,000 RWF</td>
          <td className="wLgStatus">
            <Button status="Declined" />
          </td>
        </tr>
        <tr className="wLgTr">
          <td className="wLgUser">
            <img src="/jone.jpeg" alt="customer" className="WLgImg" />
            <span className="wLgName">Susan Carol</span>
          </td>
          <td className="wLgDate">2 Jun 2021</td>
          <td className="wLgAmount">65,000 RWF</td>
          <td className="wLgStatus">
            <Button status="Pending" />
          </td>
        </tr>
        <tr className="wLgTr">
          <td className="wLgUser">
            <img src="/profile.jpg" alt="customer" className="WLgImg" />
            <span className="wLgName">Susan Carol</span>
          </td>
          <td className="wLgDate">2 Jun 2021</td>
          <td className="wLgAmount">65,000 RWF</td>
          <td className="wLgStatus">
            <Button status="Approved" />
          </td>
        </tr>
        <tr className="wLgTr">
          <td className="wLgUser">
            <img src="/jone.jpeg" alt="customer" className="WLgImg" />
            <span className="wLgName">Susan Carol</span>
          </td>
          <td className="wLgDate">2 Jun 2021</td>
          <td className="wLgAmount">65,000 RWF</td>
          <td className="wLgStatus">
            <Button status="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
