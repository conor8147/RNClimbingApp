import { Route } from "./route";

export type AreaOverview = {
  id: number;
  name: string;
  routeCount: string;
};

export type Area = AreaOverview & {
  description: string,
  heroImageUrl: string | null,
  routes: Route[],
}