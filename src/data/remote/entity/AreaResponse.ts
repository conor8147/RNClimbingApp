import { ClimbResponse } from "./ClimbResponse";

export type AreaResponse = {
  id: number;
  name: string;
  location: string;
  approach?: string;
  parentAreaId?: string | null;
  childAreas?: AreaResponse[];
  climbs?: ClimbResponse[];
};
