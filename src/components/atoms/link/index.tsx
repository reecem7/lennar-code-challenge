import './index.scss'

interface Props {
  className?: string
  href?: string
  label: string
}

export const NavLink = ({ className, href, label }: Props) => <a className={`nav-link ${className}`} href={href}>{label}</a>;

export const MenuLink = ({ className, href, label }: Props) => <a className={`menu-link ${className}`} href={href}>{label}</a>;
