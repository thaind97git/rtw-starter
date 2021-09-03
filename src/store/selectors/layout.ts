import { ILayout } from '../types/layout';

export const getDisplayLayout = (
  state: ILayout,
): { header: boolean; footer: boolean } => ({
  header: state.header,
  footer: state.footer,
});
