export interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude: number;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: number;
  epoch: Date;
  mean_motion: number;
  raan: number;
}

export interface SpaceXPayload {
  payload_id: string;
  norad_id: number[];
  reused: boolean;
  customers: string[];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
  orbit_params: OrbitParams;
}

export enum PayloadActionTypes {
  SPACE_X_PAYLOAD_REQUEST = "@@payload/feed/SPACE_X_PAYLOAD_REQUEST",
  SPACE_X_PAYLOAD_SUCCESS = "@@payload/feed/SPACE_X_PAYLOAD_SUCCESS",
  SPACE_X_PAYLOAD_ERROR = "@@payload/feed/SPACE_X_PAYLOAD_ERROR",

  PAYLOAD_PAGINATION_REQUEST = "@@payload/feed/PAYLOAD_PAGINATION_REQUEST",
  PAYLOAD_PAGINATION_SUCCESS = "@@payload/feed/PAYLOAD_PAGINATION_SUCCESS",
  PAYLOAD_PAGINATION_ERROR = "@@payload/feed/PAYLOAD_PAGINATION_ERROR",
}

export interface SpaceXPayloadState {
  readonly loading: boolean;
  readonly SpaceXPayload: SpaceXPayload[] | null;
  readonly errors: {
    SpaceXPayload?: string;
  };
}