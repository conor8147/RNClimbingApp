import { Crag, CragOverview } from "@/src/entity/crag";
import { testAreaOverviews } from "./fakeAreaData";

export const testCragOverviews: CragOverview[] = [
  { id: 1, name: 'Centennial Glen', location: 'Blackheath', routeCount: '18 routes', isFavourite: true },
  { id: 2, name: 'The Gallery', location: 'Katoomba', routeCount: '24 routes', isFavourite: false },
  { id: 3, name: 'Bald Rock', location: 'Tenterfield', routeCount: '12 routes', isFavourite: true },
  { id: 4, name: 'Mount Arapiles', location: 'Victoria', routeCount: '56 routes', isFavourite: false },
  { id: 5, name: 'Nowra Cliffs', location: 'Nowra', routeCount: '9 routes', isFavourite: true },
  { id: 6, name: 'Pigeon House', location: 'South Coast', routeCount: '14 routes', isFavourite: false },
  { id: 7, name: 'Bungleboori', location: 'New South Wales', routeCount: '21 routes', isFavourite: true },
  { id: 8, name: 'The Grose Valley', location: 'Blue Mountains', routeCount: '27 routes', isFavourite: false },
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

export const testFullCrags: Crag[] = [
  {
    id: 1,
    name: 'Centennial Glen',
    location: 'Blackheath',
    routeCount: '18 routes',
    isFavourite: true,
    description: 'A beautiful, shaded sandstone amphitheatre featuring steep sport routes and classic lines, highly popular during warmer months.',
    approach: 'Park at the end of Centennial Glen Road. Follow the clear walking track down the steps into the glen for roughly 10 minutes.',
    areas: testAreaOverviews
  },
  {
    id: 2,
    name: 'The Gallery',
    location: 'Katoomba',
    routeCount: '24 routes',
    isFavourite: false,
    description: 'One of the Blue Mountains premier sport climbing venues. Offers highly technical, vertical to gently overhanging pocketed sandstone walls.',
    approach: 'Park at the Narrow Neck lookout. Walk back along the road briefly to find the climbers track, descending via the fixed chains.',
    areas: testAreaOverviews
  },
  {
    id: 3,
    name: 'Bald Rock',
    location: 'Tenterfield',
    routeCount: '12 routes',
    isFavourite: true,
    description: 'Australia’s largest granite monolith. Features massive slabs, friction climbing, and stunning panoramic views over the border region.',
    approach: 'From the main picnic area in the National Park, follow the marked Bald Rock summit walking track for about 45 minutes to reach the climbing zones.',
    areas: testAreaOverviews
  },
  {
    id: 4,
    name: 'Mount Arapiles',
    location: 'Victoria',
    routeCount: '56 routes',
    isFavourite: false,
    description: 'A world-famous traditional climbing mecca. Known for its immaculate, hard quartzite rock and an immense density of historical, high-quality routes.',
    approach: 'Most walls are within a 5 to 20-minute flat walk directly from the Centenary Park campground.',
    areas: testAreaOverviews
  },
  {
    id: 5,
    name: 'Nowra Cliffs',
    location: 'Nowra',
    routeCount: '9 routes',
    isFavourite: true,
    description: 'Steep, punchy, and highly powerful sandstone pocket climbing situated right along the scenic Shoalhaven River.',
    approach: 'Park at the end of the dirt track near the riverbend. Walk along the base of the cliffline for 5 minutes.',
    areas: testAreaOverviews
  },
  {
    id: 6,
    name: 'Pigeon House',
    location: 'South Coast',
    routeCount: '14 routes',
    isFavourite: false,
    description: 'An adventurous backcountry crag located on the upper tiers of the iconic Pigeon House Mountain (Didthul) structure.',
    approach: 'Follow the main tourist walking track up towards the summit ladders, then branch off onto the distinct climber paths wrapping around the lower ramparts.',
    areas: testAreaOverviews
  },
  {
    id: 7,
    name: 'Bungleboori',
    location: 'New South Wales',
    routeCount: '21 routes',
    isFavourite: true,
    description: 'Deep wilderness canyon sport climbing. Offers beautifully shaded, overhanging orange sandstone walls hidden away in the Newnes State Forest.',
    approach: 'Requires a 4WD to reach the main parking clearing. From there, hike down the steep, unimproved track into the creek bed below.',
    areas: testAreaOverviews
  },
  {
    id: 8,
    name: 'The Grose Valley',
    location: 'Blue Mountains',
    routeCount: '27 routes',
    isFavourite: false,
    description: 'Stunning, exposed multi-pitch traditional lines on massive, awe-inspiring wilderness clifflines facing deep valley drops.',
    approach: 'Park at Govetts Leap or Perry’s Lookdown. Involves a strenuous, steep downhill hike into the valley lasting anywhere from 45 to 90 minutes depending on the targeted wall.',
    areas: testAreaOverviews
  }
];