import React from 'react';
import FeaturedInfo from './FeaturedInfo';

const FeaturedList = () => {
  return (
    <div className="featured">
      <FeaturedInfo title="income" amount="10000000" rate="-50000" />
      <FeaturedInfo title="Total Users" amount="15000" rate="5000" />
      <FeaturedInfo title="messages left" amount="2500" rate="-100" />
    </div>
  );
};

export default FeaturedList;
