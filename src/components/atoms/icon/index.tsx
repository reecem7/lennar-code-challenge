import ChevronIcon from '../../../assets/icons/chevron-right.svg'
import CloseIcon from '../../../assets/icons/close.svg'
import LogoIcon from '../../../assets/icons/logo.svg'
import MenuIcon from '../../../assets/icons/menu.svg'

export const Icons = {
  chevron: ChevronIcon,
  close: CloseIcon,
  logo: LogoIcon,
  menu: MenuIcon
}

interface Props {
  altText?: string
  className?: string
  onClick?: any
  type: keyof typeof Icons
}

const Icon = ({ altText, className, onClick, type }: Props) => {
  const Icon = Icons[type] ?? (() => <></>)

  return (
    <img src={Icon} alt={altText} className={className} onClick={onClick}/>
  )
}

export default Icon
