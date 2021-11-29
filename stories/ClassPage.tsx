import React from 'react';
import { 
  Button,
  Container
} from '@material-ui/core';

interface ClassPageProps {};

const ClassPage: React.FC<ClassPageProps> = () => {
  return (
    <div>
      <Container>Class Page Here</Container>
      <Button variant="outlined">Example Button from Material UI</Button>
    </div>
  );
};

export default ClassPage;