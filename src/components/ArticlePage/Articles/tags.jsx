import styles from "./tags.module.css"

export default function Tags() {
    
    const tagsList = ["Digialization", "School", "IT", "Design", "Work", "Tech"];

    const tags = tagsList.map((tag, index) =>
        <li key={index}>
            <p>
                {tag}
            </p>
        </li>
    )
    
    return (
        <div className={styles["tags-wrapper"]}>
            <ul>
                {tags}
            </ul>
        </div>
    )
}