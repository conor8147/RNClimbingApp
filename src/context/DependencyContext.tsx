import { createContext, useContext } from "react";
import { createDummyAreaRemoteDataSource, createDummyCragRemoteDataSource } from "../data/remote/fakes/fakeDataSourceFactories";
import { AreaRepository, createAreaRepository } from "../data/repository/AreaRepository";
import { CragRepository, createCragRepository } from "../data/repository/CragRepository";
import { createMMKV, MMKV } from 'react-native-mmkv'
import { createAreaLocalDataSource } from "../data/local/AreaLocalDataSource";
import { AreaRemoteDataSource } from "../data/remote/AreaRemoteDataSource";
import { CragRemoteDataSource } from "../data/remote/CragRemoteDataSource";
import { createCragLocalDataSource } from "../data/local/CragLocalDataSource";

type AppDependencies = {
  areaRemoteDataSource: AreaRemoteDataSource;
  cragRemoteDataSource: CragRemoteDataSource;
  cragRepository: CragRepository;
  areaRepository: AreaRepository;
}

const storage: MMKV = createMMKV();

const areaLocalDataSource = createAreaLocalDataSource(storage);
const cragLocalDataSource = createCragLocalDataSource(storage);

const areaRemoteDataSource = createDummyAreaRemoteDataSource();
const cragRemoteDataSource = createDummyCragRemoteDataSource();

const areaRepository = createAreaRepository(areaRemoteDataSource, areaLocalDataSource)
const cragRepository = createCragRepository(cragRemoteDataSource, cragLocalDataSource)

const dependencies: AppDependencies = {
  areaRemoteDataSource,
  cragRemoteDataSource,
  cragRepository,
  areaRepository,
}

const DependencyContext = createContext<AppDependencies | null>(null);

export const DependencyProvider = ({
  children
}: { children: React.ReactNode }
) => {
  return (
    <DependencyContext.Provider value={dependencies}>
      {children}
    </DependencyContext.Provider>
  )
};

export const useDeps = () => {
  const context = useContext(DependencyContext);
  if (!context) {
    throw new Error('useDeps must be used within a DependencyProvider');
  }
  return context;
};