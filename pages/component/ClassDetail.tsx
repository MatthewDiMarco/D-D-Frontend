import React, { useState } from 'react';
import {
  Modal
} from '@material-ui/core';

interface ClassDetailProps {};

const ClassDetail: React.FC<ClassDetailProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Class Detail
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>
          Class Detail Modal
        </div>
      </Modal>
    </>
  );
};

export default ClassDetail;