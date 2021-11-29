import React from 'react';
import { 
  Card,
  CardContent
} from '@material-ui/core';

interface ClassCardProps {};

const ClassCard: React.FC<ClassCardProps> = () => {
  return (
    <Card>
      <CardContent>
        Class Card Overview
      </CardContent>
    </Card>
  );
};

export default ClassCard;