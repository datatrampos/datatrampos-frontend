'use client'
import styled from 'styled-components'

interface IRowProps {
  center?: string
  wrap?: string
  justifycenter?: string
}

export const Row = styled.div<IRowProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (!props.center ? 'baseline' : 'center')};
  flex-wrap: ${(props) => (!props.wrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (!props.justifycenter ? 'baseline' : 'center')};
`
