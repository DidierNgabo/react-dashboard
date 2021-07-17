import React from 'react';
import FeaturedList from './FeaturedList';
import Chart from './Chart';
import { UserData } from '../dummyData';
import WidgetSm from './WidgetSm';
import WidgetLg from './WidgetLg';

const Home = () => {
  return (
    <div>
      <FeaturedList />
      <Chart
        data={UserData}
        title="Users Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
