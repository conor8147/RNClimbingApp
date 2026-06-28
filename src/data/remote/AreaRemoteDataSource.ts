import { Area, AreaOverview } from "@/src/entity/area"

export type AreaRemoteDataSource = {
  getAreasForCrag(cragId: number): Promise<AreaOverview[]>
  getAreaDetails(areaId: number): Promise<Area | null>
}
