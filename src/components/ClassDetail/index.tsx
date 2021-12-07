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
  propClassIndex: number
};

interface ApiResponseType {
  classes: Class[]
};

// This is acting as a container and a presentation componment.
// Should be broken up and moved to the appropriate directories.
const ClassDetail: React.FC<ClassDetailProps> = ({ 
  propClassIndex
}) => {
  const {
    loading, data
  } = useQuery<ApiResponseType>(GET_SELECTED_CLASS_DETAILS, {
    variables: { classIndex: propClassIndex },
    fetchPolicy: "no-cache"
  });

  if (loading) return (
    <DetailContainer>
      <Title>Loading...</Title>
    </DetailContainer>
  );

  return (
    <DetailContainer>
      {data && data.classes.length > 0 
        ? 
          <>
            <Title>{data.classes[0].name}</Title> 
            <Detail>
              <Label>Hit Die</Label>
              <Content>{data.classes[0].hit_die}</Content>
            </Detail>
            <Detail>
              <Label>Proficiencies</Label>
              <Content>
                <List>
                  {data.classes[0].proficiencies.map((prof: any, idx: number) => {
                    return (
                      <li key={idx}>
                        {prof.name}
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
                  {data.classes[0].starting_equipment.map((equip: any, idx: number) => {
                    return (
                      <li key={idx}>
                        {equip.equipment.name}
                      </li>
                    );
                  })}
                </List>
              </Content>
            </Detail>
          </>
        : 
          <>
            <Title>No Class Selected</Title>
          </>}
    </DetailContainer>
  );
};

export default ClassDetail;