import React from 'react';
import styled from '@emotion/styled';
import {
  useQuery,
  gql
} from '@apollo/client'

import ClassDetail from '../component/ClassDetail';
import ClassSelect from '../component/ClassSelect';

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
      name
      hit_die
      url
    }
  }
`

const LandingScreen: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CLASSES);

  if (loading) return <Loading>Loading...</Loading>
  if (error) return <div>An unexpected error occured</div>

  return (
    <ContainerFlex>
      <ContainerLeft>
        <ClassSelect
          propClassList={data.classes.map((cls: any) => {
            return {
              className: cls.name,
              classHitDie: cls.hit_die,
              classEndpoint: cls.url
            };
          })}
        />
      </ContainerLeft>
      <ContainerRight>
        <ClassDetail
          propClassDetail={{
            className: 'Bard',
            classEndpoint: '/api/classes/bard',
            classHitDie: 8,
            classProficiencies: [
              'A', 'B'
            ],
            classStartingEquipment: [
              'A', 'B'
            ]
          }}
        />
      </ContainerRight>
    </ContainerFlex>
  );
};

export default LandingScreen;