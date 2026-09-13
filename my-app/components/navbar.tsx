
export default function NavBar() {
    const headerItems = ["Home", "About", "Projects", "Contact"];

    return (
        <header className="w-full bg-background text-foreground p-4 flex justify-between items-center absolute top-0">
            <h1>My Portfolio</h1>

            <nav>
                <ul className="flex space-x-4">
                    {headerItems.map((item) => (
                        <li key={item}>
                            <a href="#" className="hover:text-white font-semibold">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className="bg-primary px-4 py-2 rounded hover:bg-primary-dark">
                Get in Touch
            </button>
        </header>
    )
}