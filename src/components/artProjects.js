import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/artgallery.module.css'

const ArtGallery = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.galleryItem}>
                    <div className={styles.itemNum}>
                        001
                    </div>
                    <Link to='/' className={styles.itemLink} >
                        item 1
                    </Link>
                    <hr />

                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.itemNum}>
                        002
                    </div>
                    <Link to='/' className={styles.itemLink} >
                        item 1
                    </Link>
                    <hr />
                </div>
                <div className={styles.galleryItem}>
                    <div className={styles.itemNum}>
                        003
                    </div>
                    <Link to='/' className={styles.itemLink}>
                        item 1
                    </Link>
                    <hr />
                </div>
            </div>
        </>
    );
}

export default ArtGallery
