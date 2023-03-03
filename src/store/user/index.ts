import { UsersPermissionsMe as User } from '@generated'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface UserStore {
  user: Partial<User>
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>()(
  devtools(
    immer((set) => ({
      user: {
        // TODO: REWRITE STORE
        id: '',
        email: '',
        username: '',
        blocked: false,
        confirmed: false,
        role: '',
      },
      setUser: (user) => set({ user }),
    })),
    { name: 'user-store' },
  ),
)

export const setUser = useUserStore.getState().setUser
