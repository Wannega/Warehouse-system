import { UsersPermissionsMe as User } from '@generated'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface UserStore {
  user: User
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>()(
  devtools(
    immer((set) => ({
      user: {
        id: '',
        email: '',
        username: '',
        blocked: false,
        confirmed: false,
      },
      setUser: (user) => set({ user }),
    })),
  ),
)

export const setUser = useUserStore.getState().setUser
