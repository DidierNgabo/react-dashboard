import React from 'react';
import FeaturedInfo from './FeaturedInfo';

const FeaturedList = () => {
  return (
    <div className="featured">
      <FeaturedInfo title="Revenue" amount="10000000" rate="-50000" />
      <FeaturedInfo title="Sales" amount="10000000" rate="-5000" />
      <FeaturedInfo title="Cost" amount="10000000" rate="10000" />
    </div>
  );
};

export default FeaturedList;
