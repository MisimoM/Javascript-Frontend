export default function NavBar({className, children}) {
    return(
        <nav className={className}>
            {children}
        </nav>
    )
}