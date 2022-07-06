import create from 'zustand'
import { persist } from 'zustand/middleware'

import initialCats from '../initialData.json'
import { CatFormInput, CatType } from './types/cat-type'

interface StoreType {
  cats: CatType[]
  addCat: (value: CatFormInput) => void
  removeCat: (value: number) => void
  editCat: (value: CatType) => void
}

export const useCats = create(
  persist<StoreType>(
    (set) => ({
      cats: initialCats,
      addCat: (newCat: CatFormInput) =>
        set((state) => {
          const sortedCats = state?.cats.sort((a, b) => a.id - b.id)
          const newId = sortedCats[sortedCats.length - 1].id + 1
          const cat = { ...newCat, id: newId }
          return { ...state, cats: [...state.cats, cat] }
        }),
      removeCat: (id: number) =>
        set((state) => {
          const newCats = state.cats.filter((cat) => cat.id !== id)
          return { ...state, cats: newCats }
        }),
      editCat: (newCat: CatType) =>
        set((state) => {
          const newCats = state.cats.map((cat) =>
            cat.id === newCat.id
              ? {
                  ...cat,
                  ...newCat,
                }
              : cat,
          )
          return { ...state, cats: newCats }
        }),
    }),
    {
      name: 'cats-storage',
    },
  ),
)
