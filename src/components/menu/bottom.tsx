import { ExitModal } from '@components/exit-modal'
import { ExitIcon, GearIcon } from '@icons'
import { useExitModalStore } from '@store'
import Link from 'next/link'

export const BottomMenuBar: React.FC = () => {
  const { toggle } = useExitModalStore()

  return (
    <>
      <Link href="/settings">
        <GearIcon />
      </Link>
      <ExitIcon onClick={toggle} />
      <ExitModal />
    </>
  )
}
