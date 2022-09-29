import './index.scss'
import Icon from '../icon'

interface Props {
  altText?: string
  className?: string
  onClick?: any
}

export const CloseButton = ({ className = '', onClick }: Props) => {

  return (
    <div
      className='close-button'
      onClick={onClick}
      aria-label="Close Navigation Menu"
    >
      <Icon className={className} type="close" />
    </div>
  )
}

