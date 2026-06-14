
export type Route = {
  topoNumber: number;
  name: string;
  description: string;
  grade: string;
  type: RouteType;
  stars: 0 | 1 | 2 | 3;
  length: number;
  boltCount?: number;
}

export type RouteType = 'sport' | 'trad' | 'DWS' | 'boulder'