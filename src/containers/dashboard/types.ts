export interface Links {
  reddit: string;
  article: string;
  wikipedia: string;
}

export interface SpaceXHistory {
  id: number;
  title: string;
  event_date_utc: Date;
  event_date_unix: number;
  flight_number: number;
  details: string;
  links: Links;
}


export enum HistoryActionTypes {
  SPACE_X_HISTORY_REQUEST = "@@history/feed/SPACE_X_HISTORY_REQUEST",
  SPACE_X_HISTORY_SUCCESS = "@@history/feed/SPACE_X_HISTORY_SUCCESS",
  SPACE_X_HISTORY_ERROR = "@@history/feed/SPACE_X_HISTORY_ERROR",

  HISTORY_PAGINATION_REQUEST = "@@history/feed/HISTORY_PAGINATION_REQUEST",
  HISTORY_PAGINATION_SUCCESS = "@@history/feed/HISTORY_PAGINATION_SUCCESS",
  HISTORY_PAGINATION_ERROR = "@@history/feed/HISTORY_PAGINATION_ERROR",
}

export interface SpaceXHistoryState {
  readonly loading: boolean;
  readonly spaceXHistory: SpaceXHistory[] | null;
  readonly errors: {
    spaceXHistory?: string;
  };
}
