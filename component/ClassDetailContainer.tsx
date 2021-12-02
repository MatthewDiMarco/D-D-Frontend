import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  useQuery,
  gql
} from '@apollo/client'

import { Class } from '../model/models';
import ClassDetail from './ClassDetail';

const DetailContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 36px 36px 0 36px;
  height: 90vh;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  margin: 0 0 32px 0;
`

const Detail = styled.div`
  padding: 0 0 32px 0;  
`

const Label = styled.label`
  font-weight: bold;
  font-size: 22px;
`

const Content = styled.div`
  margin: 8px 0;
`

const List = styled.ul`
  li {
    position: relative;
    left: -20px;
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

interface ClassBasicDetailType {
  name: string;
}

interface ClassStartingEquipmentType {
  equipment: ClassBasicDetailType; 
}

interface ClassDetailContainerProps {
  propClassIndex: string
};

interface ApiClassResponseType {
  name: string;
  hit_die: number;
  url: string
  proficiencies: ClassBasicDetailType[];
  starting_equipment: ClassStartingEquipmentType[];
};

interface ApiDataResponseType {
  classes: ApiClassResponseType[];
};

const ClassDetailContainer: React.FC<ClassDetailContainerProps> = ({ 
  propClassIndex
}) => {
  const [classDetail, setClassDetailContainer] = useState<Class>();

  const {
    loading
  } = useQuery(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: propClassIndex },
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setClassDetailContainer(parseSelectedClassDetailContainer(data));
    }
  });

  const parseSelectedClassDetailContainer = (data: ApiDataResponseType): Class | undefined => {
    if (propClassIndex == '') {
      return undefined;
    }

    const cls = data.classes[0];
    return {
      className: cls.name,
      classHitDie: cls.hit_die,
      classEndpoint: cls.url,
      classProficiencies: cls.proficiencies.map((pp: ClassBasicDetailType) => {
        return pp.name;
      }),
      classStartingEquipment: cls.starting_equipment.map((ee: ClassStartingEquipmentType) => {
        return ee.equipment.name;
      })
    };
  };


  if (loading) return (
    <DetailContainer>
      <Title>Loading...</Title>
    </DetailContainer>
  );

  return (
    <DetailContainer>
      <ClassDetail
        classDetail={classDetail}
      />
    </DetailContainer>
  )
};

export default ClassDetailContainer;