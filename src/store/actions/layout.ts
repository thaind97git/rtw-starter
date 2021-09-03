import { ILayout, LayoutAction } from '../types/layout';

export const SET_DISPLAY_LAYOUT = 'SET_DISPLAY_LAYOUT';

export const setDisplayLayout = (payload: ILayout = {}): LayoutAction => ({
  type: SET_DISPLAY_LAYOUT,
  payload: {
    header: !!payload.header,
    footer: !!payload.footer,
  },
});
