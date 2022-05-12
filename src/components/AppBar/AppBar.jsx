import { Link, Header, Logo, Navigation, LogoIcon } from './AppBar.styled';
import { NavLink } from 'react-router-dom';
import logo from '../../images/long-film.png'

export  function AppBar() {
    return (
        <Header>
            <Navigation>
                <NavLink to="/"><Logo>
                    <LogoIcon src={logo} alt="logo" />
                </Logo></NavLink>
                <Link to="/">Main</Link>
                <Link to="/movies">Movies</Link>
            </Navigation>
        </Header>
    )
};