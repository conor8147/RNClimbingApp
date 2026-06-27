import { useEffect, useState } from "react";
import { CragRepository, dummyCragRepository } from "../data/repository/CragRepository";
import { Crag } from "../entity/crag";

export type CragDetailsUIState =
  | { status: 'loading'; content: null; error: null }
  | { status: 'content'; content: Crag; error: null }
  | { status: 'error'; content: null; error: Error }

const loadingState: CragDetailsUIState = { status: 'loading', content: null, error: null };
const contentState = (content: Crag): CragDetailsUIState => ({status: 'content', content: content, error: null});
const errorState = (error: Error): CragDetailsUIState => ({status: 'error', content: null, error: error});

export default function useCragDetails(
  cragId: number,
  repository: CragRepository = dummyCragRepository
): CragDetailsUIState {
  const [state, setState] = useState(loadingState);

  useEffect(() => {
    let isCurrent = true;
    setState(loadingState);
    repository.getCragDetails(cragId)
      .then((crag: Crag | null) => {
        if (!isCurrent) return;

        setState(crag ? contentState(crag) : errorState(new Error('not found')));
      }).catch((error: unknown) => {
        if (!isCurrent) return;

        const typedError = error instanceof Error ? error : new Error('Unable to load crag details')
        setState(errorState(typedError));
      });

      return () => {
        isCurrent = false;
      }
  }, [repository, cragId]);

  return state;
}
