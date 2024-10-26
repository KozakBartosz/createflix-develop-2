import { NavLink } from 'react-router-dom';

export interface INavbarItem {
    path: string;
    title: string;
}

export const NavbarItem = ({ path, title }: INavbarItem) => (
    <li key={path}>
        <NavLink
            to={path}
            className="block mx-4 py-2 hover:text-orange-500 dark:hover:text-orange-400 aria-[current=page]:text-orange-500 border-b border-transparent aria-[current=page]:border-orange-500 transition-colors"
        >
            {title}
        </NavLink>
    </li>
);
