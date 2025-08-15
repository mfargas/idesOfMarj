import * as React from "react"

const Seo = ({ title }) => {
    return (
        <>
            <title>{title ? `${title} | marjiela` : `marjiela`}</title>
            <meta name="description" content="Artistic portfolio and creative blog by Marjoree E. F. - Exploring art, technology, and creative expression" />
            <meta name="author" content="Marjoree E. F." />
            <meta property="og:title" content={title ? `${title} | ides of Marge` : `ides of Marge`} />
            <meta property="og:description" content="Artistic portfolio and creative blog by Marjoree E. F." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://idesofmarge.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? `${title} | ides of Marge` : `ides of Marge`} />
            <meta name="twitter:description" content="Artistic portfolio and creative blog by Marjoree E. F." />
        </>
    )
}

export default Seo
