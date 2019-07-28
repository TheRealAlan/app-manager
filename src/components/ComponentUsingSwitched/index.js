import React from 'react';

import { setIsSwitched, useAppDispatch, useAppState } from '../../AppManager';

function ComponentUsingSwitched() {
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppState();

  const handleClick = () => {
    setIsSwitched(dispatch, !isSwitched);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isSwitched ? 'Switched On' : 'Switched Off'}
      </button>
    </div>
  );
}

export default ComponentUsingSwitched;
