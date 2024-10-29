import './App.css'
import AppHeader from '../components/app-header/AppHeader'
import AppFooter from '../components/app-footer/AppFooter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { InstructionsScene } from '../../scenes/instructions/InstructionsScene'
import { FavoritesScene } from '../../scenes/favorites/FavoritesScene'
import { MovieListScene } from '../../scenes/movie-list/MovieListScene'

function App() {
    return (
        <BrowserRouter>
            <div className="App flex min-h-screen flex-col bg-white dark:bg-[#0d1117] dark:text-white">
                <AppHeader />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<InstructionsScene />} />
                        <Route path="movie-list" element={<MovieListScene />} />
                        <Route path="favorites" element={<FavoritesScene />} />
                    </Routes>
                </main>
                <AppFooter />
            </div>
        </BrowserRouter>
    )
}

export default App
