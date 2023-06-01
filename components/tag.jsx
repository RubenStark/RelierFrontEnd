import styles from '../styles/tags.module.css'

function Tag({ tag }) {
    return (
        <div className={styles.tag}>{tag}</div>
    )

}

export default Tag