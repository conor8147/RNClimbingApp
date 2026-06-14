import { useEffect, useState } from "react";
import { CragRepository, cragRepository, dummyCragRepository } from "../data/repository/CragRepository";
import { CragOverview } from "../entity/crag";

export type CragListUIState =
  | { status: 'loading'; content: null; error: null }
  | { status: 'content'; content: CragOverview[]; error: null }
  | { status: 'error'; content: null; error: Error }

const loadingState: CragListUIState = { status: 'loading', content: null, error: null };
const contentState = (content: CragOverview[]): CragListUIState => ({ status: 'content', content: content, error: null });
const errorState = (error: Error): CragListUIState => ({ status: 'error', content: null, error: error });

export function useCragList(
  repository: CragRepository = dummyCragRepository
): CragListUIState {
  const [state, setState] = useState(loadingState);

  useEffect(() => {
    let isCurrent = true;

    setState(loadingState);
    repository.getCrags()
      .then((crags: CragOverview[] | null) => {
        if (!isCurrent) return;


        setState(contentState(crags ?? []));
      }).catch((error: unknown) => {
        if (!isCurrent) return

        const wrangledError = error instanceof Error ? error : new Error('Unable to load route details.');
        setState(errorState(wrangledError));
      });

      return () => {
        isCurrent = false;
      }
  }, [repository]);

  return state;
}
