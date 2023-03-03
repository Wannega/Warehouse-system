import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface ExitModalStore {
  visible: boolean
  toggle: () => void
}

export const useExitModalStore = create<ExitModalStore>()(
  devtools(
    immer((set, get) => ({
      visible: false,
      toggle: () => set({ visible: !get().visible }),
    })),
    { name: 'user-store' },
  ),
)

export const toggleExitModal = useExitModalStore.getState().toggle
