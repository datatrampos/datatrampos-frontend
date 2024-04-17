import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const FeaturedJobsContainer = styled.div`
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${COLORS.white} 0%,
    ${COLORS.lightGrey} 50%,
    ${COLORS.white} 100%
  );
`
