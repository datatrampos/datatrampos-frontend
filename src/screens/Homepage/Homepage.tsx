import PageTitle from '@/components/PageTitle'
import { PaginationProvider } from '@/context/pagination'

import Filter from './components/Filter'
import Footer from './components/Footer'
import List from './components/List'
import Navbar from './components/Navbar'
import OpeningSection from './components/OpeningSection'
import { FeaturedJobsContainer } from './styles'

export const Homepage = () => {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <OpeningSection />
        <PaginationProvider>
          <FeaturedJobsContainer>
            <PageTitle>Encontre sua vaga</PageTitle>
            <Filter />
            <List />
          </FeaturedJobsContainer>
        </PaginationProvider>
      </div>
      <Footer />
    </div>
  )
}
