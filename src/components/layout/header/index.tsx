import React, { useState } from 'react'
import './index.scss'
import Logo from '../../atoms/logo'
import { Button } from '../../atoms/button'
import { NavLink, MenuLink } from '../../atoms/link'
import { CloseButton } from '../../atoms/close-button'
import { MenuButton } from '../../atoms/menu-button'

const navLinks = [
  { label: 'Product', href: '#'},
  { label: 'Features', href: '#'},
  { label: 'MarketPlace', href: '#'},
  { label: 'Company', href: '#'},
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const MobileMenuLinks = () => {
    return (
      <nav className='mobile-menu-links'>
        {navLinks.map(link => <MenuLink className='gray' href={link.href} label={link.label} key={link.label}/>)}
      </nav>
    )
  }

  const MenuLinks = () => {
    return (
      <nav className='menu-links'>
        {navLinks.map(link => <NavLink className='' href={link.href} label={link.label} key={link.label}/>)}
      </nav>
    )
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header>
      <div className='mobile--header'>
        <Logo />
        <MenuButton onClick={() => toggleMenu()}/>
      </div>
      <div className={`mobile--content ${isMenuOpen ? 'open' : ''}`}>
        <div className='mobile--content--header'>
          <Logo />
          <CloseButton onClick={() => toggleMenu()}/>
        </div>
        <MobileMenuLinks />
        <div className="mobile--content--button">
          <Button label='Start free trial' />
        </div>
        <div className="mobile--content--cta">
          <span>  Existing Customer? </span>
          <NavLink className='gray' label='Log in'/>
        </div>
      </div>
      {isMenuOpen && <div className='overlay' onClick={() => toggleMenu()}/>}
      <div className='desktop--header'>
        <div className="desktop--header--leading-content">
          <Logo />
          <MenuLinks />          
        </div>
        <div className="desktop--header--trailing-content">
          <NavLink href='' label='Log in'/>
          <Button className='btn-nav' label='Start free trial' />
        </div>
      </div>
    </header>
  )
}

export default Header