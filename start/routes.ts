/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/signin').renderInertia('signin')
router.on('/terms').renderInertia('terms')
router.on('/privacy').renderInertia('privacy')
router.on('/about').renderInertia('about')
