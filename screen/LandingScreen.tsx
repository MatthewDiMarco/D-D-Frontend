import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  useQuery,
  gql
} from '@apollo/client'

import ClassDetailContainer from '../component/ClassDetailContainer';
import ClassSelect from '../component/ClassSelect';
import { ClassSnapshot } from '../model/models';

const ContainerFlex = styled.div`
  display: flex;
`

const ContainerLeft = styled.div`
  overflow: auto;
`

const ContainerRight = styled.div`
  flex-grow: 1;
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
      hit_die
      url
    }
  }
`

interface ApiClassSnapshotType {
  index: string;
  name: string;
  hit_die: number;
  url: string;
};

interface ApiDataResponseType {
  classes: ApiClassSnapshotType[];
};

const LandingScreen: React.FC = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<string>('');
  const [classList, setClassList] = useState<ClassSnapshot[]>([]);

  const { 
    loading: loadingClasses, 
    error: errorClasses, 
  } = useQuery(GET_CLASSES, { 
    skip: classList.length > 0,
    onCompleted: (data) => {
      setClassList(parseClassList(data))
    }
  });

  const parseClassList = (data: ApiDataResponseType): ClassSnapshot[] => {
    return data.classes.map((cls: ApiClassSnapshotType, idx: number): ClassSnapshot => {
      return {
        classIndex: cls.index,
        className: cls.name,
        classHitDie: cls.hit_die,
        classEndpoint: cls.url
      };
    });
  };

  const handleSelectClass = (selectedIndex: string) => {
    setSelectedClassIndex(selectedIndex);
  };

  if (loadingClasses) return <Loading>Loading...</Loading>
  if (errorClasses) return <div>An unexpected error occured</div>
  
  return (
    <ContainerFlex>
      <ContainerLeft>
        <ClassSelect
          propHandleSelectClass={handleSelectClass}
          propClassList={classList}
          propSelectedIndex={selectedClassIndex}
        />
      </ContainerLeft>
      <ContainerRight>
        <ClassDetailContainer
          propClassIndex={selectedClassIndex}
        />
      </ContainerRight>
    </ContainerFlex>
  );
};

export default LandingScreen;