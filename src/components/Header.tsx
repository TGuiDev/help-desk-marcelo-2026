type HeaderProps = {
  title: string
  subtitle: string
  userName?: string
  userRole?: string
  onLogout?: () => void
}


export function Header({ title, subtitle, userName, userRole, onLogout }: HeaderProps) {

  return (

    <header className='flex items-center justify-between bg-slate-900 px-6 py-4 text-white'>
      <div>
        <h1 className='text-2xl font-bold'>
          {title}
        </h1>
        <p className="text-slate-300">
          {subtitle}
        </p>
      </div>

      {userName && (
        <div className="flex items-center gap-4 text-right">
          <div>
            <p className="font-medium">{userName}</p>
            <p className="text-sm text-slate-300">{userRole}</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="rounded border border-slate-500 px-3 py-1 text-sm hover:bg-slate-700"
          >
            Sair
          </button>
        </div>
      )}
    </header>
  )
}
