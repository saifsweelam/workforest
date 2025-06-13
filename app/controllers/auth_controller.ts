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

    const user = await driver.user();

    const dbUser = await this.usersService.findOrCreateUser({
      provider: provider,
      providerId: user.id,
      fullName: user.name,
      email: user.email,
      profilePicture: user.avatarUrl
    });

    console.log(dbUser);

    await auth.use('web').login(dbUser);

    console.log(auth.use('web').user);

    return response.redirect().toRoute('/');
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout();
    return response.redirect().toRoute('/');
  }

}