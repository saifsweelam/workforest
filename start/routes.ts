/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
const AuthController = () => import('#controllers/auth_controller')

router.on('/').renderInertia('home')
router.on('/terms').renderInertia('terms')
router.on('/privacy').renderInertia('privacy')
router.on('/about').renderInertia('about')
router.on('/auth/signin').renderInertia('signin').use(middleware.guest())
router
    .get('/auth/:provider', [AuthController, 'redirect'])
    .where('provider', /^(google|github|linkedin)$/)
    .use(middleware.guest())
router.get('/auth/:provider/callback', [AuthController, 'callback']).use(middleware.guest())
router.get('/auth/logout', [AuthController, 'logout']).use(middleware.auth())
