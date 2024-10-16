import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img className='logo__img' src='/img/germes_logo.svg' alt='Germes Logo' />
  </Link>
)

export default Logo
