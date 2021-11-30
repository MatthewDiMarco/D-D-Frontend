import React, { useState } from 'react';
import styled from '@emotion/styled';

import ClassCard from './ClassCard';
import { ClassSnapshot } from '../../model/models';

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 16px;
  padding: 16px;
  max-height: 90vh;
`

const Child = styled.div`
`

interface ClassSelectProps {
  propClassList: ClassSnapshot[];
};

const ClassSelect: React.FC<ClassSelectProps> = ({ propClassList }) => {
  const [classList, setClassList] = useState<ClassSnapshot[]>(propClassList);

  return (
    <ContainerList>
      {classList ? classList.map(cls => {
        return (
          <Child>
            <ClassCard
              propClassName={cls.className}
              propClassHitDie={cls.classHitDie}
              propClassEndpoint={cls.classEndpoint}
            />
          </Child>
        );  
      }) : 
      <div>No classes found</div>}
    </ContainerList>
  );
};

export default ClassSelect;