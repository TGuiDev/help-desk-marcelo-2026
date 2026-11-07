import { useState, type FormEvent } from "react"
import { useAuth } from "../auth/useAuth"
import { mockUsers } from "../data/users"

export function Login() {
    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: FormEvent) {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            await login(email, password)
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao entrar")
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
            <div className="w-full max-w-md">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-bold text-slate-900">HelpDesk Lite</h1>
                    <p className="text-slate-600">Entre para gerenciar os chamados</p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow">
                    <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                    />

                    <label className="mt-4 block text-sm font-medium text-slate-700" htmlFor="password">
                        Senha
                    </label>
                    <input
                        id="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 w-full rounded border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
                    />

                    {error && (
                        <p role="alert" className="mt-4 rounded bg-red-50 px-3 py-2 text-sm text-red-700">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-6 w-full rounded bg-slate-900 py-2 font-semibold text-white hover:bg-slate-700 disabled:opacity-60"
                    >
                        {loading ? "Entrando..." : "Entrar"}
                    </button>
                </form>

                <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-4 text-sm text-slate-600">
                    <p className="mb-2 font-semibold">Usuários de teste (clique para preencher)</p>
                    <ul className="space-y-1">
                        {mockUsers.map((u) => (
                            <li key={u.id}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setEmail(u.email)
                                        setPassword(u.password)
                                    }}
                                    className="text-left hover:underline"
                                >
                                    <span className="font-medium">{u.role}</span> — {u.email} / {u.password}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
