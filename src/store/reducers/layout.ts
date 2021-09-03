import { ILayout, LayoutAction } from '../types/layout';

const { SET_DISPLAY_LAYOUT } = require('../actions/layout');

const initialState: ILayout = {
  header: true,
  footer: true,
};

const reducer = (state = initialState, action: LayoutAction): ILayout => {
  const { type, payload }: { type: string; payload: ILayout } = action;

  switch (type) {
    case SET_DISPLAY_LAYOUT:
      return { ...state, ...payload };

    default:
      return { ...state };
  }
};

export default reducer;
