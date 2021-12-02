import React from 'react';
import styled from '@emotion/styled';

import { Class } from '../model/models';

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

interface ClassDetailProps {
  classDetail: Class | undefined
};

const ClassDetail: React.FC<ClassDetailProps> = ({ 
  classDetail
}) => {
  return classDetail ? (
    <>
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
    </>
  ) :
  <Title>No Class Selected</Title>;
};

export default ClassDetail;