import env from '#start/env'
import { defineConfig, services } from '@adonisjs/ally'

const allyConfig = defineConfig({
    github: services.github({
        clientId: env.get('GITHUB_CLIENT_ID'),
        clientSecret: env.get('GITHUB_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/auth/github/callback',
    }),
    google: services.google({
        clientId: env.get('GOOGLE_CLIENT_ID'),
        clientSecret: env.get('GOOGLE_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/auth/google/callback',
    }),
    linkedin: services.linkedinOpenidConnect({
        clientId: env.get('LINKEDIN_CLIENT_ID'),
        clientSecret: env.get('LINKEDIN_CLIENT_SECRET'),
        callbackUrl: 'http://localhost:3333/auth/linkedin/callback',
    }),
})

export default allyConfig

declare module '@adonisjs/ally/types' {
    interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}
