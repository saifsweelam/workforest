import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('provider').notNullable()
            table.string('provider_id').notNullable()
            table.string('profile_picture').nullable()
            table.string('title').nullable()
            table.integer('years_of_experience').defaultTo(0)

            table.dropColumn('password')

            table.index(['provider', 'provider_id'], 'users_provider_provider_id_index')
            table.index(['email'], 'users_email_index')
        })
    }

    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('provider')
            table.dropColumn('provider_id')
            table.dropColumn('profile_picture')
            table.dropColumn('title')
            table.dropColumn('years_of_experience')

            table.string('password').notNullable()

            table.dropIndex(['provider', 'provider_id'], 'users_provider_provider_id_index')
            table.dropIndex(['email'], 'users_email_index')
        })
    }
}
