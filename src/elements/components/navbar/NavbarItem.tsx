import { NavLink } from 'react-router-dom'

export interface INavbarItem {
    path: string
    title: string
}

export const NavbarItem = ({ path, title }: INavbarItem) => (
    <li key={path}>
        <NavLink
            to={path}
            className="mx-4 block border-b border-transparent py-2 transition-colors hover:text-orange-500 aria-[current=page]:border-orange-500 aria-[current=page]:text-orange-500 dark:hover:text-orange-400"
        >
            {title}
        </NavLink>
    </li>
)
