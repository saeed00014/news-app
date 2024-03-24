"use client"

import React, { useState } from 'react'
import SideBar from './sideBar'
import HamburgerIcon from './hamburgerIcon'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showNaveBar = (value: boolean) => {
    setIsOpen(value)
  }

  return (
    <>
      <HamburgerIcon showNaveBar={showNaveBar} />
      <SideBar showNaveBar={showNaveBar} isOpen={isOpen} />
    </>
  )
}

export default HamburgerMenu