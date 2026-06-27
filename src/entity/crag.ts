import { AreaOverview } from "./area"

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

