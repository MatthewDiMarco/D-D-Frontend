import React, { useState } from 'react';
import styled from '@emotion/styled';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  transition: 0.3s;
  width: 300px;
  padding: 24px;

  :hover {
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
  propClassName: string;
  propClassHitDie: number;
  propClassEndpoint: string;
};

const ClassCard: React.FC<ClassCardProps> = ({
  propClassName,
  propClassHitDie,
  propClassEndpoint
}) => {
  const [className, setClassName] = useState<string>(propClassName);
  const [classHitDie, setHitDie] = useState<number>(propClassHitDie);
  const [classEndpoint, setClassEndpoint] = useState<string>(propClassEndpoint);

  return (
    <Card>
      <CardClassHitDue><p>{classHitDie ? classHitDie : -1}</p></CardClassHitDue>
      <CardClassName>{className ? className : 'class name undefined'}</CardClassName>
      <CardClassUrl>{classEndpoint}</CardClassUrl>
    </Card>
  );
};

export default ClassCard;