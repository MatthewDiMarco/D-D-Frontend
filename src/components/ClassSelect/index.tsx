import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';

import ClassCard from '../ClassCard';
import { ClassSnapshot } from '../../model/models';

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 24px;
  padding: 16px;
  max-height: 90vh;
`

const Loading = styled.h1`
  margin: 25vh;
  text-align: center;
`

const GET_CLASSES = gql`
  query GetClasses {
    classes {
      index
      name
      url
      hit_die
    }
  }
`

interface ClassSelectProps {
  propHandleSelectClass: (selectedIndex: string) => void;
  propSelectedIndex: string
};

// This is acting as a container component, it should be moved to another directory and it should not have a story.
const ClassSelect: React.FC<ClassSelectProps> = ({ 
  propHandleSelectClass,
  propSelectedIndex
}) => {
  const {
    loading: loadingClasses,
    error: errorClasses,
    data: data
  } = useQuery(GET_CLASSES);

  if (loadingClasses) return <Loading>Loading...</Loading>
  if (errorClasses) return <div>An unexpected error occured</div>

  return (
    <ContainerList>
      {data.classes.length > 0 ? data.classes.map((cls: ClassSnapshot, idx: number) => {
        return (
          <div key={idx}>
            <ClassCard
              propClassName={cls.name}
              propClassHitDie={cls.hit_die}
              propClassEndpoint={cls.url}
              propSelected={propSelectedIndex == cls.index 
                ? true 
                : false}
              propHandleClick={() => propHandleSelectClass(cls.index)}
            />
          </div>
        );  
      }) : 
      <div>No classes found</div>}
    </ContainerList>
  );
};

export default ClassSelect;