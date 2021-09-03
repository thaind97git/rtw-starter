export interface IIndex {
  loading?: number;
}

type IndexPayload = {
  loading: boolean;
};

export type IndexAction = {
  type: string;
  payload: IndexPayload;
};
