import React, { useState } from 'react';
import {
  Box,
  Modal,
  Button
} from '@material-ui/core';

interface ClassDetailProps {};

const ClassDetail: React.FC<ClassDetailProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button 
        variant="outlined" 
        onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box> 
          Class Detail Modal Here
        </Box>
      </Modal>
    </>
  );
};

export default ClassDetail;