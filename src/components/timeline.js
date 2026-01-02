import * as React from 'react'
import * as styles from '../styles/timeline.module.css'

const Timeline = () => {
    const [visibleItems, setVisibleItems] = React.useState(new Set())
    const itemRefs = React.useRef([])

    const timelineItems = [
        {
            year: "1990s",
            title: "VHS to DVD",
            description: "The transition from analog to digital media began",
            image: null
        },
        {
            year: "2000s",
            title: "Internet Revolution",
            description: "Media consumption shifted from physical to digital",
            image: null
        },
        {
            year: "2010s",
            title: "Mobile First",
            description: "Smartphones became the primary media device",
            image: null
        },
        {
            year: "2020s",
            title: "Interactive Media",
            description: "Passive consumption evolved into active participation",
            image: null
        }
    ]

    React.useEffect(() => {
        const observers = []

        itemRefs.current.forEach((ref, index) => {
            if (!ref) return

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setVisibleItems((prev) => new Set([...prev, index]))
                        }
                    })
                },
                {
                    threshold: 0.2,
                    rootMargin: '0px 0px -50px 0px'
                }
            )

            observer.observe(ref)
            observers.push(observer)
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [])

    return (
        <section className={styles.timelineSection}>
            <h2 className={styles.timelineTitle}>WHY AM I DOING THIS?</h2>
            <div className={styles.timelineContainer}>
                {timelineItems.map((item, index) => (
                    <div 
                        key={index} 
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`${styles.timelineItem} ${visibleItems.has(index) ? styles.visible : ''}`}
                    >
                        <div className={styles.timelineContent}>
                            <div className={styles.timelineYear}>{item.year}</div>
                            <h3 className={styles.timelineItemTitle}>{item.title}</h3>
                            <p className={styles.timelineDescription}>{item.description}</p>
                        </div>
                        <div className={styles.timelineImage}>
                            <div className={styles.imagePlaceholder}>
                                <span>IMAGE</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline

