import { create } from 'zustand';

export type StateProps = {
  scenario1: string;
  scenario2: Array<string>;

  setScenario1: (scenario1: string) => void;
  setScenario2: (scenario2: Array<string>) => void;
};

export const useScenarioStore = create<StateProps>((set) => ({
  scenario1: '',
  scenario2: [],
  setScenario1: (scenario1) => set({ scenario1 }),
  setScenario2: (scenario2) => set({ scenario2 }),
}));
