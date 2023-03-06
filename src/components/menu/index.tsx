import Image from 'next/image'
import { styled } from 'styled-components'

import { BottomMenuBar } from './bottom'
import { TopMenuBar } from './top'

export const Menu: React.FC = () => {
  return (
    <Box>
      <Bar>
        <Logo src={'/photo.png'} width={50} height={50} alt={'photo'} />
        <Routes>
          <TopMenuBar />
        </Routes>
      </Bar>
      <Routes>
        <BottomMenuBar />
      </Routes>
    </Box>
  )
}

const Box = styled.aside`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3em;
`
const Routes = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 2.5em;
`
const Bar = styled.div`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`
const Logo = styled(Image)`
  padding-bottom: 3em;
  padding-top: 3em;
  border-bottom: 1px solid #0000002d;
`
