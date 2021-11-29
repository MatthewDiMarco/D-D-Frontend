import React from 'react';
import { css, cx } from '@emotion/css';

interface BannerProps {};

const Banner: React.FC<BannerProps> = () => {
  const color = 'white';

  return (
    <div className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color}
      }
    `}>
      Banner here
    </div>
  );
};

export default Banner;