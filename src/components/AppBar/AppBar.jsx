import { Link, Header, Logo, Navigation } from './AppBar.styled';
import { NavLink } from 'react-router-dom';

export  function AppBar() {
    return (
        <Header>
            <Navigation>
                <NavLink to="/"><Logo>logo</Logo></NavLink>
                <Link to="/">Main</Link>
                <Link to="/movies">Movies</Link>
            </Navigation>
        </Header>
    )
};