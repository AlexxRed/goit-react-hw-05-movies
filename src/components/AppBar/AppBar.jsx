import { Link, Header } from './AppBar.styled';

export default function AppBar() {
    return (
        <Header>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
    )
};