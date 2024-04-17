import { GitHub, Instagram } from '@mui/icons-material'
import { Logo, FooterContainer, ImageContainer } from './styles'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <ImageContainer>
          <Logo
            src="/assets/datatrampos-text.svg"
            alt={'datatrampos-logo-title'}
            fill
          />
        </ImageContainer>
        <p>As melhores oportunidades em Dados nas melhores empresas!</p>
        <div>
          <Link
            href="https://instagram.com/datatrampos"
            style={{ marginRight: '10px' }}
          >
            <Instagram />
          </Link>
          <Link href="https://github.com/luisgmfarias">
            <GitHub />
          </Link>
        </div>
      </FooterContainer>
    </>
  )
}
