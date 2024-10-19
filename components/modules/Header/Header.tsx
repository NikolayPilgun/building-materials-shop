import Logo from '@/components/elements/Logo/Logo'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'

const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__logo'>
          <Logo />
        </div>

        <nav className='header__nav'>
          <button className='header__nav__burger' />
          <div className='header__nav__container'>
            <ul className='header__nav__items'>
              {translations[lang].header.navigation.map((item, index) => (
                <li key={index} className='header__nav__item'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <ul className='header__links'>
          <li className='header__links__item'>
            <button className='header__links__item__btn header__links__item__btn--search' />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/comparison'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>

        <div className='header__callbackRequest'>
          <p className='header__phoneNumber'>
            <a href='tel:+78432039343' className='header__phoneNumber-link'>
              <span className='header__phoneNumber-num'>8(843)203-93-43</span>
            </a>
          </p>
          <button className='header__callback__button'>
            заказать обратный звонок
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
