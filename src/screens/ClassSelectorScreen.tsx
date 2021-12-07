import React, { useState } from 'react';
import styled from '@emotion/styled';

import ClassDetail from '../components/ClassDetail';
import ClassSelect from '../components/ClassSelect';

const ContainerFlex = styled.div`
  display: flex;
`

const ContainerLeft = styled.div`
  overflow: auto;
`

const ContainerRight = styled.div`
  flex-grow: 1;
`

const LandingScreen: React.FC = () => {
  const [selectedClassIndex, setSelectedClassIndex] = useState<string>('');

  const handleSelectClass = (selectedIndex: string) => {
    setSelectedClassIndex(selectedIndex);
  };
  
  return (
    <ContainerFlex>
      <ContainerLeft>
        <ClassSelect
          propHandleSelectClass={handleSelectClass}
          propSelectedIndex={selectedClassIndex}
        />
      </ContainerLeft>
      <ContainerRight>
        <ClassDetail
          propClassIndex={selectedClassIndex}
        />
      </ContainerRight>
    </ContainerFlex>
  );
};

export default LandingScreen;