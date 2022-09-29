import './index.scss'

interface Props {
  className?: string
  label: string
  onClick?: any
}

export const Button = ({ className, label, onClick }: Props) => <button className={className} onClick={onClick}> {label}</button>

