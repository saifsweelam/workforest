import User from "#models/user";
import { CreateUserPayload } from "#interfaces/users";

export default class UsersService {
    async findOrCreateUser(data: CreateUserPayload) {
        const existingUser = await User.query()
            .where((query) => {
                query.where('provider', data.provider)
                query.andWhere('provider_id', data.providerId);
            })
            .orWhere('email', data.email)
            .first();

        if (existingUser) {
            return existingUser;
        }

        const newUser = await User.create({
            provider: data.provider,
            providerId: data.providerId,
            fullName: data.fullName,
            email: data.email,
            profilePicture: data.profilePicture,
            title: data.title,
            yearsOfExperience: data.yearsOfExperience
        });

        return newUser;
    }
}
