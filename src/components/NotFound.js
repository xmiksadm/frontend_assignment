import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

function NotFound() {

    const { t } = useTranslation()
    return (
        <div>
            <h2>{t("notFound")}</h2>
            <Link to='/'>Domov</Link>
        </div>
    )
}

export default NotFound
