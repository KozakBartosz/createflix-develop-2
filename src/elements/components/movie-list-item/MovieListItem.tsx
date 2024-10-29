import { useState } from 'react'
import { cn } from '../../../lib/utils'
import { useFavoriteStore } from '../../../store/favoriteState'

type MovieListItemProps = {
    id: string
    posterImage: string
    title: string
    description: string
}

export default function MovieListItem({
    id,
    posterImage,
    title,
    description,
}: MovieListItemProps) {
    const { favoriteList, addFavorite, removeFavorite } = useFavoriteStore()
    const [clicked, setClicked] = useState(false)
    const isFavorite = favoriteList.includes(id)

    return (
        <article className="h-max bg-white shadow-xl">
            <div className="flex font-sans">
                {posterImage ? (
                    <img
                        src={posterImage}
                        alt={`${title} Movie Poster`}
                        width={192}
                        height={289}
                        className="block min-w-48 object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center text-center text-gray-500">
                        No photo
                    </div>
                )}
                <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                        <h3 className="flex-auto text-lg font-semibold text-slate-900">
                            {title}
                        </h3>
                        <div className="mb-4 text-lg font-semibold text-slate-500">
                            <button
                                className={cn(
                                    'flex h-9 w-9 flex-none items-center justify-center rounded-md border border-slate-200 transition-all',
                                    {
                                        'border-orange-500 bg-orange-500 text-white':
                                            isFavorite,
                                        'animate-plum': clicked && isFavorite,
                                    },
                                )}
                                type="button"
                                aria-label="Like"
                                onClick={() => {
                                    if (isFavorite) {
                                        removeFavorite(id)
                                    } else {
                                        setClicked(true)
                                        addFavorite(id)
                                    }
                                }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mb-6 flex space-x-4 text-sm font-medium" />
                    <p className="line-clamp-[10] text-sm text-slate-700">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}
