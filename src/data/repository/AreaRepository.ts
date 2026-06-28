import { Area, AreaOverview } from "@/src/entity/area";
import { AreaRemoteDataSource } from "../remote/AreaRemoteDataSource";
import { AreaLocalDataSource } from "../local/AreaLocalDataSource";

export type AreaRepository = {
  getCachedAreaDetails(areaId: number): Area | null
  getAreaDetails(areaId: number): Promise<Area | null>
}

export const createAreaRepository = (
  remoteDataSource: AreaRemoteDataSource,
  localDataSource: AreaLocalDataSource,
): AreaRepository => {
  return {
    getCachedAreaDetails(areaId: number): Area | null {
      return localDataSource.getArea(areaId)
    },

    async getAreaDetails(areaId: number) {
      const localResult = localDataSource.getArea(areaId);

      if (localResult) return localResult

      const remoteResult = await remoteDataSource.getAreaDetails(areaId);
      if (remoteResult == null) {
        return null
      } else {
        localDataSource.saveArea(remoteResult)
      }

      return remoteResult
    }
  }
}