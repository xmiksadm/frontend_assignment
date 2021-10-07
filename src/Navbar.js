import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Nadácia Good Boy</h1>
            <div className="links">
                <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" className=""><FacebookIcon /></a>
                <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer" className=""><InstagramIcon /></a>
            </div>
        </nav>
    )
}

export default Navbar;