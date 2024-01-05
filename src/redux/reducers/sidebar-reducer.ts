export type Action1Type = {
  type: string;
};

export type ActionsType = Action1Type;

type StateType = {};

const initialState: StateType = {};

export const sidebarReducer = (
  state: StateType = initialState,
  action: ActionsType
) => {
  return state;
};
