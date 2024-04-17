import { ReactNode, createContext, useState } from 'react'

interface AppContextProps {
  page: number
  setPage: (page: number) => void
  company: string
  setCompany: (company: string) => void
  remote: string
  setRemote: (remote: string) => void
  orderBy: string
  setOrderBy: (orderBy: string) => void
  location: string
  setLocation: (location: string) => void
}

export const PaginationContext = createContext<AppContextProps>({
  page: 1,
  setPage: () => {},
  company: '',
  setCompany: () => {},
  remote: '',
  setRemote: () => {},
  orderBy: '',
  setOrderBy: () => {},
  location: '',
  setLocation: () => {},
})

export const PaginationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [page, setPage] = useState(1)
  const [company, setCompany] = useState('')
  const [remote, setRemote] = useState('')
  const [orderBy, setOrderBy] = useState('date')
  const [location, setLocation] = useState('')

  return (
    <PaginationContext.Provider
      value={{
        page,
        setPage,
        company,
        setCompany,
        remote,
        setRemote,
        orderBy,
        setOrderBy,
        location,
        setLocation,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}
