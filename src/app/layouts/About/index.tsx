import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 50px auto;
  width: 50%;
`

interface AboutLayoutProps {};

const About: React.FC<AboutLayoutProps> = () => {
  return (
    <Container>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Nemo ratione veniam, modi excepturi eaque harum deserunt in rerum omnis, 
        suscipit voluptas quia quaerat sed ipsa, odio laboriosam libero deleniti cupiditate.
      </p>
      <br/>
      <p>
        <a href="http://www.dnd5eapi.co/">DND API</a>
      </p>
    </Container>
  );
};

export default About;