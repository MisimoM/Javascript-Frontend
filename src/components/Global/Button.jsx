export default function Button({className, title, type}) {
    return (
        <button className={className} type={type}>{title}<i className="fa-solid fa-arrow-up"></i></button>
    )
}