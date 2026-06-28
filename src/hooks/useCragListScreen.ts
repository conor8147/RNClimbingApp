import { useDeps } from "../context/DependencyContext";
import { useQuery } from "@tanstack/react-query";

export function useCragList() {
  const remoteDataSource = useDeps().cragRemoteDataSource;

  return useQuery({
    queryKey: ['cragList'],
    queryFn: () => remoteDataSource.getCrags(),
    meta: { persist: true }
  })
}