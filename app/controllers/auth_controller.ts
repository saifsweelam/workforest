import UsersService from '#services/users';
import { providerValidator } from '#validators/auth';
import { inject } from '@adonisjs/core';
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(private usersService: UsersService) {}
  
  async redirect({ ally, params }: HttpContext) {
    const provider = await providerValidator.validate(params.provider);
    return ally.use(provider).redirect();
  }

  async callback({ ally, auth, params, response }: HttpContext) {
    const provider = await providerValidator.validate(params.provider);
    const driver = ally.use(provider);

    if (driver.accessDenied() || driver.stateMisMatch() || driver.hasError()) {
      return response.redirect().toRoute('login');
    }

    setTimeout(() => {
      console.log('Auth callback stuck');
    }, 5000);

    const user = await driver.user();

    const dbUser = await this.usersService.findOrCreateUser({
      provider: provider,
      providerId: user.id,
      fullName: user.name,
      email: user.email,
      profilePicture: user.avatarUrl
    });

    auth.use('web').login(dbUser);

    return 'done';
    // return response.redirect().toRoute('/');
  }

}