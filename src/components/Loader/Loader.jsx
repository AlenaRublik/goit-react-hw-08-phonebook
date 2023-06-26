import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = props => {

  return (
    <ContentLoader
    speed={2}
    width={1200}
    height={160}
    viewBox="0 0 1200 160"
      backgroundColor="#8a9bff"
    foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="520" y="6" rx="4" ry="4" width="450" height="38" />
      <rect x="480" y="6" rx="4" ry="4" width="35" height="38" />
      <rect x="520" y="55" rx="4" ry="4" width="450" height="38" />
      <rect x="480" y="55" rx="4" ry="4" width="35" height="38" />
      <rect x="520" y="104" rx="4" ry="4" width="450" height="38" />
      <rect x="480" y="104" rx="4" ry="4" width="35" height="38" />

    </ContentLoader>
  )
}


