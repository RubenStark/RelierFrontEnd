import styles from '../styles/tags.module.css'
import classNames from 'classnames';

function Tag({ tag }) {
    return (
        <div className={styles.tag}>{tag}</div>
    )

}

export default Tag