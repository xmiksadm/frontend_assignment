import img from "./css/logo.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <div id='column1'>
                <h1><img src={img} alt="logo" className="logo"/> Good Boy</h1>
            </div>
            <div id='column2'>
                <ul><br/>
                <h4>Nadácia Good Boy</h4><br/>
                    <a href="/about">O projekte</a><br/>
                    <a href="/instructions">Ako na to</a><br/>
                    <a href="/contact">Kontakt</a><br/><br/><br/>
                </ul>
            </div>
            <div id='column3'>
                <h4>Nadácia Good Boy</h4><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
            </div>
            <div id='column4' className="links">
                <ul>
                    <h4>Nadácia Good Boy</h4><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                    <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" className=""><FacebookIcon /></a>
                    <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer" className=""><InstagramIcon /></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer;