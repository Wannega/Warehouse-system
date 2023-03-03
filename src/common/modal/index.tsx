import { createPortal } from 'react-dom'
import { CloseIcon } from '@icons'
import styled from 'styled-components'

interface Props {
  visible?: boolean
  title?: string
  onClose?: () => void
  children?: React.ReactNode
}

export const Modal: React.FC<Props> = ({
  visible,
  title,
  onClose,
  children,
}) => {
  if (!visible) return <></>

  const handlerClickContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return createPortal(
    <Popup onClick={onClose}>
      <Content onClick={handlerClickContent}>
        <Header>
          <h4>{title}</h4>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>
        {children}
      </Content>
    </Popup>,
    document.body,
  )
}

const Popup = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #80808034;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 15px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`
const CloseButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
