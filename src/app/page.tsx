'use client'

import Homepage from '@/screens/Homepage'
import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from 'react-query'

export default function Home() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Homepage />
      </QueryClientProvider>
    </main>
  )
}
