export type CreateUserPayload = {
    provider: 'github' | 'google' | 'linkedin';
    providerId: string;
    fullName?: string;
    email: string;
    profilePicture?: string;
    title?: string;
    yearsOfExperience?: number;
}