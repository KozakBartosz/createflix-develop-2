import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Favorite = {
    favoriteList: string[]
    addFavorite: (id: string) => void
    removeFavorite: (id: string) => void
}

export const useFavoriteStore = create<Favorite>()(
    persist(
        (set) => ({
            favoriteList: [],
            addFavorite: (id) =>
                set((state) => ({
                    favoriteList: [...state.favoriteList, id],
                })),
            removeFavorite: (id) =>
                set((state) => ({
                    favoriteList: state.favoriteList.filter(
                        (favoriteId) => favoriteId !== id,
                    ),
                })),
        }),
        {
            name: 'favorites-storage',
        },
    ),
)
