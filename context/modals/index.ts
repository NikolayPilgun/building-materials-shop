'use client'
import { createDomain } from 'effector'

export const modals = createDomain()

export const openMenuNav = modals.createEvent()
export const closeMenuNav = modals.createEvent()
