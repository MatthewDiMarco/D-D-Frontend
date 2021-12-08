import React from 'react';
import styled from '@emotion/styled';

import { Class } from '../../model/models';

const DetailContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 36px 36px 0 36px;
  height: 90vh;
  overflow-y: scroll;
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
    left: 20px;
  }
`

interface ClassDetailProps {
  classDetail: Class | undefined
  customTitle: string
};

const ClassDetail: React.FC<ClassDetailProps> = ({ 
  classDetail,
  customTitle
}) => {
  return (
    <DetailContainer>
      {classDetail
        ? 
          <>
            <Title>{classDetail.name}</Title> 
            <Detail>
              <Label>Hit Die</Label>
              <Content>{classDetail.hit_die}</Content>
            </Detail>
            <Detail>
              <Label>Proficiencies</Label>
              <Content>
                <List>
                  {classDetail.proficiencies.map((prof: any, idx: number) => {
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
                  {classDetail.starting_equipment.map((equip: any, idx: number) => {
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
            <Title>{customTitle}</Title>
          </>}
    </DetailContainer>
  );
};

export default ClassDetail;