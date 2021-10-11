import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components'

const Facebook = styled(FacebookIcon) `
    filter: invert(50%);

    &:hover {
        filter: grayscale(100%);
    }
`
const Instagram = styled(InstagramIcon) `
    filter: invert(50%);

    &:hover {
        filter: grayscale(100%);
    }
`

const Navigation = styled.nav `
    background-color: #FEFEFE;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
    padding: 20px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
`

const WebName = styled.h1 `
    color: #9F9F9F;
    margin-left: 10%;
`

const Link = styled.a `
    margin-left: auto;
    margin-right: 15%;
    text-decoration: none;
    padding: 8px;
`

const Navbar = () => {
    return (
        <Navigation>
            <WebName>Nadácia Good Boy</WebName>
            <Link>
                 <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" style={{marginRight: '20px'}}>
                    <Facebook />
                </a>
                 <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer">
                    <Instagram />
                </a>
            </Link>
        </Navigation>
    )
}

export default Navbar;