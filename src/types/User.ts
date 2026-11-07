export type UserRole = "admin" | "atendente" | "cliente"

export type User = {
    id: number
    name: string
    email: string
    role: UserRole
}

// Usuário "de mentira" usado só no login mockado (inclui senha)
export type MockUser = User & {
    password: string
}
