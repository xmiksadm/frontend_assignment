import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components'

const Facebook = styled(FacebookIcon) `
    -webkit-filter: invert(50%);
`
const Instagram = styled(InstagramIcon) `
    -webkit-filter: invert(50%);
`

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Nadácia Good Boy</h1>
            <div className="links">
                <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" className=""><Facebook /></a>
                <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer" className=""><Instagram /></a>
            </div>
        </nav>
    )
}

export default Navbar;