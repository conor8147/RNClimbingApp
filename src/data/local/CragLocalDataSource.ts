import { Crag } from "@/src/entity/crag"
import { MMKV } from "react-native-mmkv"

export type CragLocalDataSource = {
  getCragOverviews(): Crag[]
  saveCragOverviews(crags: Crag[]): void
  getCrag(id: number): Crag | null
  save(area: Crag): void
}

export const createCragLocalDataSource = (
  storage: MMKV
): CragLocalDataSource => {
  return {

    getCragOverviews(): Crag[] {
      const json = storage.getString(KEY + 'all')
      return json ? JSON.parse(json) : []
    },

    saveCragOverviews(crags: Crag[]): void {
      storage.set(KEY + 'all', JSON.stringify(crags))
    },
    getCrag(id: number): Crag | null {
      const json = storage.getString(KEY + 'id')
      return json ? JSON.parse(json) : null
    },
    save(crag: Crag): void {
      storage.set(KEY + crag.id, JSON.stringify(crag))
    }
  }
}

const KEY = "crag_"