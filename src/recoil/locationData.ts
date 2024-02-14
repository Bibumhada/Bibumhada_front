import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'locationDataSet',
  storage: sessionStorage,
});

export interface LocationSetData {
  latitude: string;
  longitude: string;
}

export const locationData = atom<LocationSetData | null>({
  key: 'locationData',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
