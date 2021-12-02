import React, { useState } from 'react';
import styled from '@emotion/styled';

import ClassCard from './ClassCard';
import { ClassSnapshot } from '../model/models';

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 24px;
  padding: 16px;
  max-height: 90vh;
`

const Child = styled.div``

interface ClassSelectProps {
  propHandleSelectClass: (selectedIndex: string) => void;
  propClassList: ClassSnapshot[];
  propSelectedIndex: string
};

const ClassSelect: React.FC<ClassSelectProps> = ({ 
  propHandleSelectClass,
  propClassList,
  propSelectedIndex
}) => {
  return (
    <ContainerList>
      {propClassList ? propClassList.map((cls, idx) => {
        return (
          <Child key={idx}>
            <ClassCard
              propClassName={cls.className}
              propClassHitDie={cls.classHitDie}
              propClassEndpoint={cls.classEndpoint}
              propSelected={propSelectedIndex == cls.classIndex 
                ? true 
                : false}
              propHandleClick={() => propHandleSelectClass(cls.classIndex)}
            />
          </Child>
        );  
      }) : 
      <div>No classes found</div>}
    </ContainerList>
  );
};

export default ClassSelect;