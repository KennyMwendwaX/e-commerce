import { createContext, useContext, ReactNode, useState } from "react"
import { ItemTypes } from "../types/StoreTypes"

type SearchProviderProps = {
  children: ReactNode
}

type SearchContextTypes = {
  filteredItems: ItemTypes[] | null
  setFilteredItems: React.Dispatch<React.SetStateAction<ItemTypes[] | null>>
}

const SearchContext = createContext({} as SearchContextTypes)

export function useSearchContext() {
  return useContext(SearchContext)
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [filteredItems, setFilteredItems] = useState<ItemTypes[] | null>(null)
  return (
    <SearchContext.Provider
      value={{
        filteredItems,
        setFilteredItems,
      }}>
      {children}
    </SearchContext.Provider>
  )
}
