import type { MockUser } from "../types/User"

// Dados mockados: NÃO usar em produção (senha em texto puro no front-end)
export const mockUsers: MockUser[] = [
    {
        id: 1,
        name: "Marcelo Admin",
        email: "admin@helpdesk.com",
        password: "admin123",
        role: "admin",
    },
    {
        id: 2,
        name: "Ana Atendente",
        email: "ana@helpdesk.com",
        password: "ana123",
        role: "atendente",
    },
    {
        id: 3,
        name: "Carlos Cliente",
        email: "carlos@cliente.com",
        password: "carlos123",
        role: "cliente",
    },
]
