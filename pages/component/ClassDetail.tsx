import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  useQuery,
  gql
} from '@apollo/client'

import { Class } from '../../model/models';

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

interface ClassDetailProps {
  propClassIndex: string
};

const ClassDetail: React.FC<ClassDetailProps> = ({ 
  propClassIndex
}) => {
  const [classDetail, setClassDetail] = useState<Class>();

  console.log('received: ', propClassIndex);

  const {
    loading
  } = useQuery(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: propClassIndex },
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
      setClassDetail(parseSelectedClassDetail(data));
      console.log('COMPLETE: ', propClassIndex);
    }
  });

  const parseSelectedClassDetail = (data: any): Class | undefined => {
    if (propClassIndex == '') {
      return undefined;
    }

    const cls = data.classes[0];

    return {
      className: cls.name,
      classHitDie: cls.hit_die,
      classEndpoint: cls.url,
      classProficiencies: cls.proficiencies.map((pp: any) => {
        return pp.name;
      }),
      classStartingEquipment: cls.starting_equipment.map((ee: any) => {
        return ee.equipment.name;
      })
    };
  };


  if (loading) return (
    <DetailContainer>
      <Title>Loading...</Title>
    </DetailContainer>
  );

  return classDetail ? (
    <DetailContainer>
      <Title>{classDetail.className}</Title>
      <Detail>
        <Label>Hit Die</Label>
        <Content>{classDetail.classHitDie}</Content>
      </Detail>
      <Detail>
        <Label>Proficiencies</Label>
        <Content>
          <List>
            {classDetail.classProficiencies.map((prof, idx) => {
              return (
                <li key={idx}>
                  {prof}
                </li>
              );
            })}
          </List>
        </Content>
      </Detail>
      <Detail>
        <Label>Starting Equipment</Label>
        <Content>
          <List>
            {classDetail.classStartingEquipment.map((equip, idx) => {
              return (
                <li key={idx}>
                  {equip}
                </li>
              );
            })}
          </List>
        </Content>
      </Detail>
    </DetailContainer>
  ) : 
  <DetailContainer>
    <Title>No Class Selected</Title>
  </DetailContainer>
};

export default ClassDetail;