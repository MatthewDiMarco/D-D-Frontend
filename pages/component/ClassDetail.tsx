import React, { useState } from 'react';
import styled from '@emotion/styled';

import { Class } from '../../model/models';

const DetailContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 36px 36px 0 36px;
  height: 100%;
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

interface ClassDetailProps {
  propClassDetail: Class
};

const ClassDetail: React.FC<ClassDetailProps> = ({ propClassDetail }) => {
  const [classDetails, setClassDetails] = useState<Class>(propClassDetail);

  const view = classDetails ? (
    <DetailContainer>
      <Title>Class Detail</Title>
      <Detail>
        <Label>Class Name</Label>
        <Content>{classDetails.className}</Content>
      </Detail>
      <Detail>
        <Label>Hit Die</Label>
        <Content>{classDetails.classHitDie}</Content>
      </Detail>
      <Detail>
        <Label>Proficiencies</Label>
        <Content>
          <List>
            {classDetails.classProficiencies.map(prof => {
              return (
                <li key={prof}>{prof}</li>
              );
            })}
          </List>
        </Content>
      </Detail>
      <Detail>
        <Label>Starting Equipment</Label>
        <Content>
          <List>
            {classDetails.classStartingEquipment.map(equip => {
              return (
                <li key={equip}>{equip}</li>
              );
            })}
          </List>
        </Content>
      </Detail>
    </DetailContainer>
  ) : 
  <DetailContainer>
    <Detail>Select a class</Detail>
  </DetailContainer>

  return view;
};

export default ClassDetail;