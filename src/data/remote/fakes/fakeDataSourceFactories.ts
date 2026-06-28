import { AreaRemoteDataSource } from "../AreaRemoteDataSource";
import { CragRemoteDataSource } from "../CragRemoteDataSource";
import { testAreaOverviews, testAreas } from "./fakeAreaData";
import { testCragOverviews, testFullCrags } from "./fakeCragData";


export const createDummyAreaRemoteDataSource = (): AreaRemoteDataSource => {
  return {
    async getAreasForCrag(cragId: number) {
      await new Promise((res) => setTimeout(res, 500));
      return testAreaOverviews;
    },

    async getAreaDetails(areaId: number) {
      await new Promise((res) => setTimeout(res, 500));
      return testAreas.find((area) => area.id == areaId) ?? null;
    },
  };
};

export const createDummyCragRemoteDataSource = (): CragRemoteDataSource => {
  return {
    async getCrags() {
      await new Promise((res) => setTimeout(res, 500));
      return testCragOverviews;
    },

    async getCragDetails(cragId: number) {
      await new Promise((res) => setTimeout(res, 500));
      return testFullCrags.find((item) => item.id == cragId) ?? null;
    }
  }
}
