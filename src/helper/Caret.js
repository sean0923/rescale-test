import React from 'react';

//I'd suggest making the svgs 14px by 14px
//closed
export const ClosedCaret = () => {
  return (
    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 5.54 11.09" width="14px" height="14px">
      <polyline points="0 0 5.54 5.54 0 11.09" />
    </svg>
  );
};

//open
export const OpenCaret = () => {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      transform="rotate(90, 0, 0)"
      viewBox="0 0 5.54 11.09"
      width="14px"
      height="14px"
    >
      <polyline points="0 0 5.54 5.54 0 11.09" />
    </svg>
  );
};
