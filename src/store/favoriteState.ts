import { create } from 'zustand'

type Favorite = {
    favoriteList: string[]
    addFavorite: (id: string) => void
    removeFavorite: (id: string) => void
}

export const useFavoriteStore = create<Favorite>((set) => ({
    favoriteList: [],
    addFavorite: (id) => set((state) => ({ favoriteList: [...state.favoriteList, id] })),
    removeFavorite: (id) =>
        set((state) => ({
            favoriteList: state.favoriteList.filter((favoriteId) => favoriteId !== id),
        })),
}))
