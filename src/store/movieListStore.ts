import { create } from 'zustand'

export type Movie = {
    id: string
    title: string
    posterImage?: string
    description: string
}

type Store = {
    movieList: Movie[]
    loading: boolean
    error: null | string
    fetchMovie: () => void
}

type ItunesEntry = {
    'id': { attributes: { 'im:id': string } }
    'im:name': { label: string }
    'im:image': { label: string }[]
    'summary': { label: string }
}

export const useMovieListStore = create<Store>((set) => ({
    movieList: [],
    loading: false,
    error: null,
    fetchMovie: async () => {
        set(() => ({ loading: true }))

        if (process.env.NODE_ENV === 'development')
            await new Promise((resolve) => setTimeout(resolve, 300))

        try {
            const response = await fetch(
                'https://itunes.apple.com/us/rss/topmovies/limit=100/json',
            )
            const itunesData = await response.json()

            const data = itunesData.feed.entry.map((entry: ItunesEntry) => ({
                id: entry.id.attributes['im:id'],
                title: entry['im:name'].label,
                posterImage: entry['im:image']?.[2]?.label,
                description: entry['summary'].label,
            }))

            set(() => ({ movieList: data, loading: false }))
        } catch {
            set(() => ({ error: 'Failed to download movie list', loading: false }))
        }
    },
}))
