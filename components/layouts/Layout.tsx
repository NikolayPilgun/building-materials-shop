'use client'

import Header from '../modules/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <footer>Footer</footer>
    </>
  )
}

export default Layout
