'use client'

import { COLORS } from '@/constants/colors'
import Image from 'next/image'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  background-color: ${COLORS.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  color: white;

  p {
    font-size: 13px;
    margin: 13px 0;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    span {
      margin: 0 5px;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }
`

export const Logo = styled(Image)`
  width: 300px;
`

export const ImageContainer = styled.div`
  width: 226px;
  height: 34px;
  position: relative;
`
