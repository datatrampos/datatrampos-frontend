import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const Label = styled.label<{ issecondary?: string }>`
  color: ${(props) => (!props.issecondary ? COLORS.white : COLORS.darkGrey)};
  font-size: 12px;
  font-weight: 200;
  margin-right: 7px;
`
