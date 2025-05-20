import { LucideSettings } from "lucide-react"
import { Link, useLocation } from "react-router"

type SidebarLink = {
    to: string
    icon: React.ElementType
    label: string
}

export const Sidebar = ({
    links
}: {
    links: SidebarLink[]
}) => {
    const pathname = useLocation().pathname
    return (
        <div id="sidebar">
            <ul className="links">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to} data-active={pathname === link.to}>
                            <link.icon />
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <ul className="links">
            <li>
                    <Link to="/settings" data-active={pathname === "/settings"}>
                        <LucideSettings />
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
