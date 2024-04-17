'use client'

import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 36px;
  font-weight: 200;
  text-align: center;
  color: ${COLORS.darkPink};

  @media (max-width: 900px) {
    font-size: 30px;
  }
`
