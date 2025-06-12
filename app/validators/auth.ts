import vine from '@vinejs/vine'

export const providerValidator = vine.compile(vine.enum(['github', 'google', 'linkedin']))
