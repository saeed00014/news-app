"use client"

import React, { useState } from 'react'
import SideBar from './sideBar'
import HamburgerIcon from './hamburgerIcon'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <HamburgerIcon setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default HamburgerMenu