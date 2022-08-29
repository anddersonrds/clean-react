export class InvalidCredentialError extends Error {
  constructor() {
    super('Credenciais Inválidas')
    this.name = 'InvalidCredentialError'
  }
}
