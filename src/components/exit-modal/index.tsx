import { Button, Modal } from '@common'
import { CloseIcon } from '@icons'
import { useExitModalStore } from '@store'
import styled from 'styled-components'
import jsCookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export const ExitModal: React.FC = () => {
  const { visible, toggle } = useExitModalStore()
  const router = useRouter()

  const handleLogout = () => {
    jsCookie.remove('access-token')
    toggle()
    router.push('/login')
  }

  return (
    <Modal title={'Подтверждение выхода'} visible={visible} onClose={toggle}>
      <Body>
        Вы уверены, что хотите выйти?
        <Actions>
          <Action onClick={handleLogout}>Да</Action>
          <Action onClick={toggle} variant="outlined">
            Нет
          </Action>
        </Actions>
      </Body>
    </Modal>
  )
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25em;
  margin-top: 15px;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  gap: 10px;
`
const Action = styled(Button)`
  flex: 1;
  border-radius: 999px;
`
