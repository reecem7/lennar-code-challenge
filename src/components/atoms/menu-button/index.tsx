import './index.scss'
import Icon from '../icon'

interface Props {
  altText?: string
  className?: string
  onClick?: any
}

export const MenuButton = ({ className = '', onClick }: Props) => {

  return (
    <div
      className='menu-button'
      onClick={onClick}
      aria-label="Open Navigation Menu"
    >
      <Icon className={className} type="menu" />
    </div>
  )
}

