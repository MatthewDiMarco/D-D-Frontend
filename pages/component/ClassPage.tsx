import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import ClassCard from './ClassCard';
import { ClassSnapshot } from '../../model/models';

interface ClassPageProps {
  propClassList: ClassSnapshot[];
};

const ClassPage: React.FC<ClassPageProps> = ({ propClassList }) => {
  const [classList, setClassList] = useState<ClassSnapshot[]>(propClassList);

  return (
    <Grid container spacing={2}>
      {classList ? classList.map(cls => {
        return (
          <Grid 
            key={cls.className}
            item
          >
            <ClassCard
              propClassName={cls.className}
              propClassHitDie={cls.classHitDie}
              propClassEndpoint={cls.classEndpoint}
            ></ClassCard>
          </Grid>     
        );  
      }) : <div>No classes.</div>}
    </Grid>
  );
};

export default ClassPage;