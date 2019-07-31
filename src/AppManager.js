import React, { useContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

const AppDispatch = React.createContext(null);
const AppState = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'SET_IS_SWITCHED':
      return {
        ...state,
        isSwitched: action.payload,
      };
    default:
      return state;
  }
}

function AppManager({ children }) {
  const initialState = { isSwitched: false };

  const [state, dispatch] = useReducer(reducer, initialState);

  const memoizedState = useMemo(
    () => ({
      ...state,
    }),
    [state],
  );

  return (
    <AppDispatch.Provider value={dispatch}>
      <AppState.Provider value={memoizedState}>{children}</AppState.Provider>
    </AppDispatch.Provider>
  );
}

AppManager.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Set a switch on or off
 *
 * @param {function} dispatch
 * @param {boolean} isSwitched
 */
const setIsSwitched = (dispatch, isSwitched) => {
  dispatch({
    type: 'SET_IS_SWITCHED',
    payload: isSwitched,
  });
};

const useAppDispatch = () => useContext(AppDispatch);
const useAppState = () => useContext(AppState);

export default AppManager;
export { setIsSwitched, useAppDispatch, useAppState };
