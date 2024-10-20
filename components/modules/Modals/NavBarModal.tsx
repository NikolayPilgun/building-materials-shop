import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { closeMenuNav } from '@/context/modals'
import { $navMenuIsOpen } from '@/context/modals/state'
import { useLang } from '@/hooks/useLang'
import { useUnit } from 'effector-react'

const NavBarModal = () => {
  const { lang, translations } = useLang()
  const navMenuIsOpen = useUnit($navMenuIsOpen)

  const handleSwitchLang = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLang('ru')
  const handleSwitchLangToEn = () => handleSwitchLang('en')

  const handleOpenMenu = () => {
    closeMenuNav()
  }
  return (
    <nav className={`nav-bar-modal ${navMenuIsOpen ? 'open' : 'close'}`}>
      <button className='nav-bar-modal__close' onClick={handleOpenMenu} />
      <div className='nav-bar-modal__container'>
        <ul className='nav-bar-modal__items'>
          {translations[lang].header.navigation.map((item, index) => (
            <li key={index} className='nav-bar-modal__item'>
              {item}
            </li>
          ))}
        </ul>
        <div className={`nav-bar-modal__lang`}>
          <button
            className={`nav-bar-modal__lang-btn ${
              lang === 'ru' ? 'lang-active' : ''
            }`}
            onClick={handleSwitchLangToRu}
          >
            RU
          </button>
          <button
            className={`nav-bar-modal__lang-btn ${
              lang === 'en' ? 'lang-active' : ''
            }`}
            onClick={handleSwitchLangToEn}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}
export default NavBarModal
