import React, { useState } from 'react';
import styled from '@emotion/styled';

import ClassCard from './ClassCard';
import { ClassSnapshot } from '../../model/models';

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 24px;
  padding: 16px;
  max-height: 90vh;
`

const Child = styled.div`
`

interface ClassSelectProps {
  propClassList: ClassSnapshot[];
};

const ClassSelect: React.FC<ClassSelectProps> = ({ 
  propClassList,
}) => {
  const [classList, setClassList] = useState<ClassSnapshot[]>(propClassList);
  const [classSelectedIdx, setClassSelectedIdx] = useState<number>(-1);

  const handleSelectionChange = (updatedIdx: number) => {
    setClassSelectedIdx(updatedIdx);
  };

  return (
    <ContainerList>
      {classList ? classList.map((cls, idx) => {
        return (
          <Child key={idx}>
            <ClassCard
              propClassName={cls.className}
              propClassHitDie={cls.classHitDie}
              propClassEndpoint={cls.classEndpoint}
              propSelected={classSelectedIdx === idx ? true : false}
              propHandleClick={() => handleSelectionChange(idx)}
            />
          </Child>
        );  
      }) : 
      <div>No classes found</div>}
    </ContainerList>
  );
};

export default ClassSelect;