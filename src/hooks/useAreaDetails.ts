import { useEffect, useState } from "react";
import { AreaRepository, dummyAreaRepository } from "../data/repository/AreaRepository";
import { Area } from "../entity/area";

export type AreaDetailsUIState =
  | { status: 'loading'; content: null; error: null }
  | { status: 'content'; content: Area; error: null }
  | { status: 'error'; content: null; error: Error }

const loadingState: AreaDetailsUIState = { status: 'loading', content: null, error: null };
const contentState = (content: Area): AreaDetailsUIState => ({ status: 'content', content: content, error: null });
const errorState = (error: Error): AreaDetailsUIState => ({ status: 'error', content: null, error: error });

export default function useAreaDetails(
  areaId: number,
  repository: AreaRepository = dummyAreaRepository,
) {
  const [state, setState] = useState(loadingState);

  useEffect(() => {
    let isCurrent = true;

    setState(loadingState);
    repository.getAreaDetails(areaId)
      .then((area: Area | null) => {
        if (!isCurrent) return
        setState(area ? contentState(area) : errorState(new Error('not found')));
      }).catch((error: unknown) => {
        if (!isCurrent) return

        const typedError = error instanceof Error ? error : new Error('Unable to load area details')
        setState(errorState(typedError));
      });

      return () => {
        isCurrent = false;
      }
  }, [repository, areaId]);

  return state;
}