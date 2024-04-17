'use client'

import { COLORS } from '@/constants/colors'
import styled from 'styled-components'

export const ImageContainer = styled.div`
  position: relative;
  width: 395px;
  height: 245px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    width: 300px;
    height: 200px;
  }
`

export const Container = styled.div`
  background-color: ${COLORS.white};
  padding: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 25px;
  }
`

export const HeaderPresentation = styled.h1`
  color: ${COLORS.darkGrey};
  width: 900px;
  font-weight: 500;
  font-size: 40px;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 95%;
    font-size: 32px;
  }
`

export const TextPresentation = styled.p`
  color: ${COLORS.darkGreyCian};
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  width: 900px;

  @media (max-width: 900px) {
    width: 95%;
    font-size: 16px;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${COLORS.darkGrey};
  }
`
