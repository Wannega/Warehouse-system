import { DownloadIcon, HouseIcon, StorageIcon } from '@icons'
import Link from 'next/link'

const routes = [
  { Icon: HouseIcon, route: '/dashboard' },
  { Icon: StorageIcon, route: '/storage' },
  { Icon: DownloadIcon, route: '/download' },
]

export const TopMenuBar: React.FC = () => {
  return (
    <>
      {routes.map(({ Icon, route }) => (
        <Link key={route} href={route}>
          <Icon />
        </Link>
      ))}
    </>
  )
}
