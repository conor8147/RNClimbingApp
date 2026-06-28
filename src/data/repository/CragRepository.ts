import { Crag, CragOverview } from "@/src/entity/crag";
import { CragRemoteDataSource } from "../remote/CragRemoteDataSource";
import { CragLocalDataSource } from "../local/CragLocalDataSource";

export type CragRepository = {
  getCrags(): Promise<CragOverview[] | null>;
  getCragDetails(cragId: number): Promise<Crag | null>;
}

export const createCragRepository = (
  remoteDataSource: CragRemoteDataSource,
  localDataSource: CragLocalDataSource,
): CragRepository => {
  return {
    async getCrags() {
      const cached = localDataSource.getCragOverviews();

      if (cached) return cached

      return remoteDataSource.getCrags();
    },

    async getCragDetails(cragId: number) {
      const cached = localDataSource.getCrag(cragId);

      if (cached) return cached
      
      return remoteDataSource.getCragDetails(cragId);
    }
  }
}