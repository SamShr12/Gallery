import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';
import Art from '../../../../data/data.json'
const breakpointColumnsObj = {
  default: 4,
  2000: 5,
  1500: 4,
  1000: 4,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = () => (
  <Masonry className="flex animate-slide-fwd gap-2" breakpointCols={breakpointColumnsObj}>
    {Art?.map((pin) => <Pin key={pin.id} pin={pin} className="w-max" />)}
  </Masonry>
);

export default MasonryLayout