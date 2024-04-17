'use client'

import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const PageTitle = styled.h2`
  font-size: 46px;
  font-weight: 100;
  text-align: center;
  color: ${COLORS.darkPink};

  @media (max-width: 900px) {
    font-size: 36px;
  }
`
