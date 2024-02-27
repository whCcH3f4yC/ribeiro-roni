import React from 'react';

const Subtitle = ({subtitle}) => {
  return (
    <h2 className={`display-5   m-5 mb-xl-5 pb-xl-4`} style={{color:'var(--title)'}}>
      {subtitle}
    </h2>
  );
};

export default Subtitle;