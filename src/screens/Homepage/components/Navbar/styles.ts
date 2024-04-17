'use client'

import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  a {
    text-decoration: none;
    color: ${COLORS.white};
    font-size: 32px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 427px;
  height: 64px;

  @media (max-width: 900px) {
    width: 300px;
    height: 40px;
  }
`

export const Container = styled.div`
  padding-top: 50px;
  background-color: ${COLORS.white};
`
