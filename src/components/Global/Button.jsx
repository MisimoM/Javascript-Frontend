export default function Button({className, title}) {
    return (
        <button className={className}>{title}<i className="fa-solid fa-arrow-up"></i></button>
    )
}