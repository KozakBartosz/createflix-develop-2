import { INavbarItem, NavbarItem } from './NavbarItem';
interface INavbar {
    elements: INavbarItem[];
}

export default function Navbar({ elements }: INavbar) {
    return (
        <nav className={['Navbar'].join(' ')}>
            <ul className="flex items-center">
                {elements.map((element) => (
                    <NavbarItem key={element.path} {...element} />
                ))}
            </ul>
        </nav>
    );
}
