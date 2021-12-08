import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  useQuery, gql
} from '@apollo/client';

import { Class, ClassSnapshot } from '../../model/models';
import ClassCard from '../../components/ClassCard';
import ClassDetail from '../../components/ClassDetail';

const ContainerFlex = styled.div`
  display: flex;
`

const ContainerLeft = styled.div`
  overflow: auto;
`

const ContainerRight = styled.div`
  flex-grow: 1;
`

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill);
  grid-gap: 24px;
  padding: 16px;
  max-height: 90vh;
`

const Info = styled.h1`
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

const GET_SELECTED_CLASS_DETAILS = gql`
  query GetSelectedClass($classIndex: String!) {
    classes (filter: { index: $classIndex }) {
      index
      name
      hit_die
      proficiencies {
        name
      }
      starting_equipment {
        equipment {
          name
        }
      }
    }
  }
`

interface GetClassesResponseType {
  classes: ClassSnapshot[]
};

interface GetSelectedClassDetailsResponseType {
  classes: Class[]
};

interface ClassSelectLayoutProps {};

const ClassSelect: React.FC<ClassSelectLayoutProps> = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<string>('');

  const {
    loading: loadingClasses,
    error: errorClasses,
    data: dataClasses
  } = useQuery<GetClassesResponseType>(GET_CLASSES);

  const {
    loading: loadingDetail, 
    data: dataDetail
  } = useQuery<GetSelectedClassDetailsResponseType>(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: selectedClassIndex },
    fetchPolicy: 'no-cache'
  });

  if (loadingClasses) return <Info>Loading...</Info>
  if (errorClasses) return <Info>An unexpected error occured</Info>

  return (
    <ContainerFlex>
      <ContainerLeft>
        <ContainerList>
          {dataClasses?.classes.map((cls: ClassSnapshot) => {
            return (
              <ClassCard 
                propClassSnapshot={cls}
                propSelected={selectedClassIndex === cls.index}
                propHandleClick={(selectedIndex: string) => {
                  setSelectedClassIndex(selectedIndex);
                }}
              />
            );
          })}
        </ContainerList>
      </ContainerLeft>
      <ContainerRight>
        {loadingDetail 
          ? <ClassDetail classDetail={undefined} customTitle="Loading..." />
          : <ClassDetail classDetail={dataDetail?.classes[0]} customTitle="No Class Selected" />}
      </ContainerRight>
    </ContainerFlex>
  );
};

export default ClassSelect;