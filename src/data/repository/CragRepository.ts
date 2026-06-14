import { AreaOverview, Crag, CragOverview } from "@/src/entity/crag";
import { cragRemoteDataSource } from "../remote/CragRemoteDataSource";

export type CragRepository = {
  getCrags(): Promise<CragOverview[] | null>;
  getCragDetails(cragId: number): Promise<Crag | null>;
}

export const cragRepository: CragRepository = {
  async getCrags() {
    return cragRemoteDataSource.getCrags();
  },

  async getCragDetails(cragId: number) {
    return null;
  }
};

export const dummyCragRepository: CragRepository = {
  async getCrags() {
    await new Promise((res) => setTimeout(res, 5000));
    return testCragOverviews;
  },

  getCragDetails: function (cragId: number): Promise<Crag | null> {
    throw new Error("Function not implemented.");
  }
};

const testCragOverviews: CragOverview[] = [
  { id: 1, name: 'Centennial Glen', location: 'Blackheath', routeCount: '18 routes', isFavourite: true },
  { id: 2, name: 'The Gallery', location: 'Katoomba', routeCount: '24 routes', isFavourite: false },
  { id: 3, name: 'Bald Rock', location: 'Tenterfield', routeCount: '12 routes', isFavourite: true },
  { id: 4, name: 'Mount Arapiles', location: 'Victoria', routeCount: '56 routes', isFavourite: false },
  { id: 5, name: 'Nowra Cliffs', location: 'Nowra', routeCount: '9 routes', isFavourite: true },
  { id: 6, name: 'Pigeon House', location: 'South Coast', routeCount: '14 routes', isFavourite: false },
  { id: 7, name: 'Bungleboori', location: 'New South Wales', routeCount: '21 routes', isFavourite: true },
  { id: 8, name: 'The Grose Valley', location: 'Blue Mountains', routeCount: '27 routes', isFavourite: false },
];

const testAreaOverviews: AreaOverview[] = [
  {
    id: 1,
    name: "Wave Wall",
    routeCount: "32 routes",
  },
  {
    id: 2,
    name: "Junket Pumper Wall",
    routeCount: "12 routes",
  },
  {
    id: 3,
    name: "Main Wall",
    routeCount: "16 routes",
  },
  {
    id: 4,
    name: "Hip Shake Jerk Wall",
    routeCount: "19 routes",
  },
    {
    id: 5,
    name: "Levitation Wall",
    routeCount: "25 routes",
  },
];

export const testCrag: Crag = {
  id: 1,
  name: 'Centennial Glen',
  description: "The home of sport climbing in Australia. This controversial area has been the scene of some very public debates about ethics of all kinds: chipping, bolting, climbers' toileting habits, interactions with bushwalkers, and even the climbing environment itself. Note that chipped holds did occur here, but they have all been filled in years ago. Nowadays chipping is NOT acceptable here (or anywhere else for that matter). The climbing is short, fun and very very sporty.",
  approach: "The crag is easily accessed by two methods:\nFollow Bundarra St to it's west end, then walk down the Centennial Pass walking trail. After about 10 minutes (200m after crossing the creek), turn left at the signposted junction and follow the gully down into the glen.\n(2) Park in the carpark at the end of 'Centennial Glen' Rd, Blackheath. Take the stepped path straight ahead (not the firetrail through the gate to the left) for about 200m until it winds down a short rock step, then turn right at the bottom. Follow this track into the glen; where it splits, stay right nearer the base of the cliffs (left takes you to the 'Porter's Pass' climbing areas through Centennial Pass).\n\nOption 1 is fastest for the whole Glen if you're walking from Blackheath. Even if you're driving, Option 1 is just as quick as Option 2 if you are going to climb at 'Main Wall', 'White Linen', 'Search and Destroy', 'Wave Wall' or 'Woodpecker Wall'. Option 2 is by far the most popular but is only quicker for 'Junket Pumper' and 'Hip Shake Jerk' sectors ... and the carpark can get ridiculously busy.",
  location: 'Blackheath', 
  routeCount: '18 routes', 
  isFavourite: true,
  areas: testAreaOverviews,
};