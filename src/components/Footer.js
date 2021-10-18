import img from "../css/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

/* footer */
const DivFooter = styled.div `
    bottom:0;
    padding: 30px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-top: 1px solid #f2f2f2;
    max-width: 80%;

    h1 {
        color: #321E0F;
    }
    a {
        filter: invert(50%);
        text-decoration: none;
        padding: 6px;
    }
    a:hover {
        filter: grayscale(100%);
    }
`

const Logo = styled.img `
    float: left;
    height: 50px;
`

const Column1 = styled.div `
    margin-top: -70px;
    width: 200px;
`

const Column23 = styled.div `
    margin-left: auto;
    width: 200px;
    text-align: center;
    vertical-align: middle;
`

const Column4 = styled.div `
    margin-left: auto;
    width: 200px;
`

const Footer = () => {

    const { t } = useTranslation()

    return (
        <DivFooter>
            <Column1>
                <h1><Logo src={img} alt="logo"/>Good Boy</h1>
            </Column1>
            <Column23>
                <ul><br/>
                    <h4>{t("foundationName")}</h4><br/>
                    <a href="/about">{t("footer.about")}</a><br/>
                    <a href="/instructions">{t("footer.instructions")}</a><br/>
                    <a href="/contact">{t("footer.contact")}</a><br/><br/><br/>
                </ul>
            </Column23>
            <Column23>
                <h4>{t("foundationName")}</h4><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
            </Column23>
            <Column4>
            <ul>
                <h4>{t("foundationName")}</h4><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" className=""><FacebookIcon /></a>
                <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer" className=""><InstagramIcon /></a>
            </ul>
            </Column4>
        </DivFooter>
    )
}

export default Footer;