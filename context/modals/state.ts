'use client'
import { closeMenuNav, modals, openMenuNav } from '.'

export const $navMenuIsOpen = modals
  .createStore(false)
  .on(openMenuNav, () => true)
  .on(closeMenuNav, () => false)
