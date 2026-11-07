import { useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { mockUsers } from "../data/users"
import type { User } from "../types/User"

const STORAGE_KEY = "helpdesk:user"

function loadUser(): User | null {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as User) : null
    } catch {
        return null
    }
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(loadUser)

    async function login(email: string, password: string) {
        // simula a latência de uma API
        await new Promise((resolve) => setTimeout(resolve, 600))

        const found = mockUsers.find(
            (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
        )
        if (!found) throw new Error("E-mail ou senha inválidos")

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password: _password, ...safeUser } = found
        setUser(safeUser)
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
        } catch {
            // sessão só em memória se o storage estiver indisponível
        }
    }

    function logout() {
        setUser(null)
        try {
            localStorage.removeItem(STORAGE_KEY)
        } catch {
            // ignora
        }
    }

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}
