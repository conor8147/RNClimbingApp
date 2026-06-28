import { useDeps } from "../context/DependencyContext";
import { useQuery } from "@tanstack/react-query";

export default function useCragDetails(
  cragId: number,
) {
  const repository = useDeps().cragRepository

  return useQuery({
    queryKey: ['crag', cragId],
    queryFn: () => repository.getCragDetails(cragId),
    staleTime: staleTime,
  })
}

const staleTime = 1000 * 60 * 10