"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./NavLink.module.css";
const NavLink = ({item}) => {
    const pathname = usePathname()
  return (
    <Link href={item.path} className={`${pathname === item.path ? styles.active : styles.container}`}>{item.title}</Link>
  )
}

export default NavLink