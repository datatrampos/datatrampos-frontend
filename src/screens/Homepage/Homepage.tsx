import React from 'react'

import OpeningSection from './components/OpeningSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import List from './components/List'
import { PaginationProvider } from '@/context/pagination'
import Filter from './components/Filter'
import { FeaturedJobsContainer } from './styles'
import PageTitle from '@/components/PageTitle'

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
