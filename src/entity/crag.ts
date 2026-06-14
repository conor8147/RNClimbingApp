export type CragOverview = {
  id: number,
  name: string,
  location: string,
  routeCount: string,
  isFavourite: boolean,
}

export type Crag = CragOverview & {
  description: string,
  approach: string,
  areas: AreaOverview[]
}

export type AreaOverview = {
  id: number,
  name: string,
  routeCount: string,
}