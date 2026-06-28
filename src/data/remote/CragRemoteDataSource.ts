import { Crag, CragOverview } from "@/src/entity/crag";
import { buildApiUrl } from "./api";
import { AreaResponse } from "./entity/AreaResponse";

export type CragRemoteDataSource = {
  getCrags(): Promise<CragOverview[] | null>;
  getCragDetails(cragId: number): Promise<Crag | null>
};

function toCragOverview(area: AreaResponse): CragOverview {
  return {
    id: Number(area.id ?? 0),
    name: String(area.name ?? "Unknown crag"),
    location: String(area.location ?? "Unknown location"),
    routeCount: String(area.climbs?.length ?? 0),
    isFavourite: false,
  };
}

export const cragRemoteDataSource: CragRemoteDataSource = {
  async getCrags() {
    const response = await fetch(buildApiUrl("/areas"));

    if (!response.ok) {
      throw new Error(`Failed to load crags: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as unknown;

    const areaList = Array.isArray(data)
      ? data
      : (data as { areas?: unknown[]; } | null)?.areas;

    if (!Array.isArray(areaList)) {
      return null;
    }

    return areaList.map((item) => toCragOverview(item as AreaResponse));
  },

  async getCragDetails(cragId: number) {
    throw new Error("Function not implemented.");
  }
};
