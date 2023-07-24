import { Products } from "@/types/ProductTypes";
import { createContext, useContext, ReactNode, useState } from "react";

type SearchProviderProps = {
  children: ReactNode;
};

type SearchContextTypes = {
  filteredItems: Products[] | null;
  setFilteredItems: React.Dispatch<React.SetStateAction<Products[] | null>>;
};

const SearchContext = createContext({} as SearchContextTypes);

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [filteredItems, setFilteredItems] = useState<Products[] | null>(null);
  return (
    <SearchContext.Provider
      value={{
        filteredItems,
        setFilteredItems,
      }}>
      {children}
    </SearchContext.Provider>
  );
}
