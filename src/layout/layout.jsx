import React from 'react'
import { AppHeader } from './app-header/app-header'
import "./layout.scss"
import { AppFooter } from './app-footer/app-footer'
export const Layout = ({ children }) => {
  return (
    <>
      <div className="smd-sales-body">
        <div className="smd-sales-layout">
          <AppHeader />
        </div>
        <div className="smd-content">
          {children}
        </div>
        <AppFooter />
      </div>
    </>
  )
}
