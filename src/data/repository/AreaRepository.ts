import { Area, AreaOverview } from "@/src/entity/area";
import { testAreas } from "./testAreas";

export type AreaRepository = {
  getAreaOverviews(): Promise<AreaOverview[]>
  getAreaDetails(areaId: number): Promise<Area | null>
}

export const dummyAreaRepository: AreaRepository = {
  async getAreaOverviews() {
    await new Promise((res) => setTimeout(res, 500));
    return testAreaOverviews;
  },

  async getAreaDetails(areaId: number) {
    await new Promise((res) => setTimeout(res, 500));
    return testAreas.find((item) => item.id == areaId) ?? null;
  }
};

export const testAreaOverviews: AreaOverview[] = [
  {
    id: 1,
    name: "Wave Wall",
    routeCount: "32 routes",
  },
  {
    id: 2,
    name: "Junket Pumper Wall",
    routeCount: "12 routes",
  },
  {
    id: 3,
    name: "Main Wall",
    routeCount: "16 routes",
  },
  {
    id: 4,
    name: "Hip Shake Jerk Wall",
    routeCount: "19 routes",
  },
  {
    id: 5,
    name: "Levitation Wall",
    routeCount: "25 routes",
  },
];
