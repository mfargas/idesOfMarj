import * as React from "react"
import Head from "next/head"

const Seo = ({ title, description }) => {
    const siteName = "MARJIELA"
    const defaultDesc = "Frontend developer, creative technologist, and indie app developer writing about interactive media, dev work, and the moving image."
    const pageTitle = title ? `${title} | ${siteName}` : siteName
    const pageDesc  = description || defaultDesc

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDesc} />
            <meta name="author" content="Marjoree E. F." />

            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" href="/favicon.ico" sizes="any" />

            {/* Open Graph */}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDesc} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://idesofmarj.com" />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDesc} />
        </Head>
    )
}

export default Seo
