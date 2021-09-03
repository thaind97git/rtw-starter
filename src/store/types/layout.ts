export interface ILayout {
  header?: boolean;
  footer?: boolean;
}

export type LayoutAction = {
  type: string;
  payload: ILayout;
};
