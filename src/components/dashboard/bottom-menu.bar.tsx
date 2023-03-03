import { ExitModal } from '@components/exit-modal'
import { ExitIcon, GearIcon } from '@icons'
import { useExitModalStore } from '@store'

export const BottomMenuBar: React.FC = () => {
  const { toggle } = useExitModalStore()

  return (
    <>
      <GearIcon />
      <ExitIcon onClick={toggle} />
      <ExitModal />
    </>
  )
}
