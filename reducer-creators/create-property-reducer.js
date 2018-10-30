import { overrideStateProp, resetState } from './action-handlers';

const createPropertyReducer = (initialState, actionTypes, customHandlers = null) => (
  state = initialState,
  action
) => {
  const propertyHandlers = {
    override: () => overrideStateProp(action),
    reset: () => resetState(initialState),
    ...customHandlers
  };

  const handlerType = actionTypes[action.type];
  return handlerType ? propertyHandlers[handlerType](state, action) : state;
};

export default createPropertyReducer;
