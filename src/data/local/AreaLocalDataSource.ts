import { Area } from "@/src/entity/area"
import { MMKV } from "react-native-mmkv";

export type AreaLocalDataSource = {
  getArea(id: number): Area | null
  saveArea(area: Area): void
}

export const createAreaLocalDataSource = (
  storage: MMKV
): AreaLocalDataSource => {
  return new AreaLocalDataSourceImpl(storage)
}

class AreaLocalDataSourceImpl implements AreaLocalDataSource {
  private storage: MMKV;

  constructor(storage: MMKV) {
    this.storage = storage
  }

  getArea(id: number): Area | null {
    const jsonArea = this.storage.getString(KEY + id);
    return jsonArea ? JSON.parse(jsonArea) : null;
  }
  
  saveArea(area: Area): undefined {
    this.storage.set(KEY + area.id, JSON.stringify(area));
  }
}

const KEY = "crag_area_"