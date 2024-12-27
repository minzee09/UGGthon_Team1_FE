import { create } from 'zustand';

export type StateProps = {
  scenario1: string;
  scenario2: Array<string>;
  scenario3: Array<string>;
  scenario4: string;
  scenario5: Array<string>;

  setScenario1: (scenario1: string) => void;
  setScenario2: (scenario2: Array<string>) => void;
  setScenario3: (scenario3: Array<string>) => void;
  setScenario4: (scenario4: string) => void;
  setScenario5: (scenario5: Array<string>) => void;
};

export const useScenarioStore = create<StateProps>((set) => ({
  scenario1: '',
  scenario2: [],
  scenario3: [],
  scenario4: '',
  scenario5: [],
  setScenario1: (scenario1) => set({ scenario1 }),
  setScenario2: (scenario2) => set({ scenario2 }),
  setScenario3: (scenario3) => set({ scenario3 }),
  setScenario4: (scenario4) => set({ scenario4 }),
  setScenario5: (scenario5) => set({ scenario5 }),
}));
