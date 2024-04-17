'use client'
import styled from 'styled-components'

interface IRow {
  center?: string
  wrap?: string
  justifyCenter?: string
}

export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (!props.center ? 'baseline' : 'center')};
  flex-wrap: ${(props) => (!props.wrap ? 'nowrap' : 'wrap')};
  justify-content: ${(props) => (!props.justifyCenter ? 'baseline' : 'center')};
`
