import { useDeps } from "../context/DependencyContext";
import { useQuery } from "@tanstack/react-query";

export default function useAreaDetails(
  areaId: number,
) {
  const remoteDataSource = useDeps().areaRemoteDataSource;

  return useQuery({
    queryKey: ['area', areaId],
    queryFn: () => remoteDataSource.getAreaDetails(areaId),
    staleTime: staleTime,
  })
}

const staleTime = 1000 * 60 * 10