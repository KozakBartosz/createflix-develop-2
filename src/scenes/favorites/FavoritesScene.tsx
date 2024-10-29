import MovieList from '../../elements/components/movie-list/MovieList'
import { Title } from '../../elements/components/title/Title'
import { useFavoriteStore } from '../../store/favoriteStore'
import { useFavoriteList } from '../../store/useFavoriteList'

export const FavoritesScene = () => {
    const { favorites, loading, error } = useFavoriteList()
    const { favoriteList, addFavorite, removeFavorite } = useFavoriteStore()

    return (
        <div className="container mx-auto p-4">
            <Title>Favorites</Title>
            <MovieList
                movies={favorites}
                loading={loading}
                error={error}
                onAddFavorite={addFavorite}
                onRemoveFavorite={removeFavorite}
                favoriteList={favoriteList}
            />
        </div>
    )
}
