'use client'

import { useMeQuery } from '@generated'
import Image from 'next/image'
import styled from 'styled-components'

export const Showcase: React.FC = () => {
  const { data } = useMeQuery()

  return (
    <Box>
      <Avatar src={'/photo.png'} width={50} height={50} alt={'photo'} />
      <Data>
        <Name>{data?.me?.username}</Name>
        <Role>{data?.me?.role?.name}</Role>
      </Data>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Data = styled.div``
const Name = styled.h1`
  font-size: 1.6ch;
  font-weight: 500;
  margin: 0;
`
const Role = styled.div`
  font-size: 1.4ch;
  margin: 0;
  color: gray;
`
const Avatar = styled(Image)``
