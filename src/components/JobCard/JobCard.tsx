import { Home, LocationCity } from '@mui/icons-material'
import React from 'react'
import {
  CardButton,
  CardInfoContainer,
  CardItem,
  CardItemsContainer,
  CompanyLogo,
  CompanyName,
  CompanyWithoutLogo,
  Container,
  JobCardInfo,
  JobTitle,
  TopContainer,
  ImageContainer,
} from './styles'
import { handleSinceData } from '@/utils'
import { IJobData } from '@/types'

interface IJobCard extends IJobData {
  logo?: string
  companyName?: string
}

export const JobCard = ({
  id,
  date,
  title,
  location,
  remote,
  url,
  logo,
  companyName,
}: IJobCard) => {
  return (
    <Container key={id}>
      <CardInfoContainer>
        <TopContainer>
          {logo ? (
            <ImageContainer>
              <CompanyLogo
                src={`data:image/jpeg;base64,${logo}`}
                alt={`${companyName}-logo`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </ImageContainer>
          ) : (
            <CompanyWithoutLogo>
              {companyName?.slice(0, 2).toUpperCase()}
            </CompanyWithoutLogo>
          )}
          <p>{handleSinceData(date)}</p>
        </TopContainer>

        <JobCardInfo>
          <CompanyName>{companyName}</CompanyName>
          <JobTitle href={url} target="_blank" rel="noreferrer">
            {title}
          </JobTitle>
          <CardItemsContainer>
            {location && (
              <CardItem key={location}>
                <LocationCity style={{ width: '15px', marginRight: '5px' }} />
                {location}
              </CardItem>
            )}
            {remote === true && (
              <CardItem>
                <Home style={{ width: '15px', marginRight: '5px' }} />
                Aceita remoto
              </CardItem>
            )}
          </CardItemsContainer>
        </JobCardInfo>
      </CardInfoContainer>
      <CardButton
        style={{ color: 'rgb(77, 77, 77)' }}
        href={url}
        target="_blank"
      >
        Saiba mais
      </CardButton>
    </Container>
  )
}
