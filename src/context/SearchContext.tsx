import { createContext, useContext, ReactNode, useState } from "react"

type SearchProviderProps = {
  children: ReactNode
}

type SearchContextTypes = {
  searchQuery: string | null
  setSearchQuery: (query: string | null) => void
}

const SearchContext = createContext({} as SearchContextTypes)

export function useSearchContext() {
  return useContext(SearchContext)
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string | null>(null)

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}>
      {children}
    </SearchContext.Provider>
  )
}
