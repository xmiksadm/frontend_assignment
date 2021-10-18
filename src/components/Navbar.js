import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import styled from 'styled-components'
import { useTranslation } from "react-i18next"

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
    margin-right: 10%;
    text-decoration: none;
    padding: 8px;
`

const Button = styled.button `
    border-radius: 12px;
    border: none;
    cursor: pointer;
    padding: 10px;
    margin-right: 5px;

    &:hover {
        color: white;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }

    &.selected {
        color: white;
        background: linear-gradient(115.41deg, #CD8A64 -1.77%, #C4794F 73.03%);
    }
`

const Navbar = () => {

    const [selectedButton, setSelectedButton]  = useState("SK");
    const {t, i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language.toLowerCase())
        setSelectedButton(language)
    }

    return (
        <Navigation>
            <WebName>{t("foundationName")}</WebName>
            <Link>
                 <a href="https://www.facebook.com/GoodRequestCom" target="_blank" rel="noreferrer" style={{marginRight: '20px'}}>
                    <Facebook />
                </a>
                 <a href="https://www.instagram.com/goodrequest/" target="_blank" rel="noreferrer">
                    <Instagram />
                </a>
            </Link>
            {["SK", "CZ", "EN"].map(key => 
                <Button className={key === selectedButton ? 'selected' : ''} type="button" key={key} onClick={() => changeLanguage(key)}>{key}</Button>
            )}
            {/* <Trans i18nKey="labelFirst" >
            Vyberte si možnosť, ako chcete pomôcť
            </Trans> */}
        </Navigation>
    )
}

export default Navbar;