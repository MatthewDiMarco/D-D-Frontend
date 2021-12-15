import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { ClassSnapshot } from '../../model/models';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  transition: 0.2s;
  width: 300px;
  padding: 24px;

  :hover {
    transform: scale(1.05);
  }

  :hover, :focus {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const CardClassName = styled.div`
  font-weight: bold;
`

const CardClassHitDue = styled.div`
  background: #f1f1f1;
  margin: 24px auto 32px auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 36px;
`

const CardClassUrl = styled.div`
  color: darkgray;
  font-size: 16px;
  margin: 8px 0 0 0;
`

interface ClassCardProps {
  propClassSnapshot: ClassSnapshot | undefined;
  propSelected: boolean;
  propHandleClick: (selectedIndex: string) => void;
};

const ClassCard: React.FC<ClassCardProps> = ({
  propClassSnapshot,
  propSelected,
  propHandleClick
}) => {
  return (
    <Card
      tabIndex={0}
      onFocusCapture={propClassSnapshot ? () => propHandleClick(propClassSnapshot.index) : undefined} 
      onClick={propClassSnapshot ? () => propHandleClick(propClassSnapshot.index) : undefined}
      className={css`
        background: ${propSelected ? css`#f1f1f1;` : css`0`};
      `}
    >
      <CardClassHitDue><p>{propClassSnapshot ? propClassSnapshot.hit_die : 0}</p></CardClassHitDue>
      <CardClassName>{propClassSnapshot ? propClassSnapshot.name : 'class name undefined'}</CardClassName>
      <CardClassUrl>{propClassSnapshot ? propClassSnapshot.url : 'url undefined'}</CardClassUrl>
    </Card>
  );
};

export default ClassCard;