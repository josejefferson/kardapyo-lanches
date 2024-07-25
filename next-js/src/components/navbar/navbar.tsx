import Image from 'next/image'
import styles from './navbar.module.css'
import logo from '@/assets/logo.svg'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface INavbarProps {
  search?: string
  user?: any
}

export function Navbar(props: INavbarProps) {
  return (
    <>
      <nav className={`${styles.navbar} navbar bg-base-100`}>
        <div className="container mx-auto max-w-6xl">
          {/* Título */}
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">
              <Image src={logo} alt="Logo" className="h-10 w-32" />
            </a>
          </div>

          <div className="flex gap-2 items-center">
            {/* Pesquisa */}
            <form action="/search" method="GET">
              <label className="input input-bordered flex items-center gap-2 h-10 w-36 md:w-auto">
                <input
                  type="text"
                  name="q"
                  placeholder="Pesquisar..."
                  className="search w-full"
                  required
                  value={props.search}
                  autoFocus={!!props.search}
                />
                <button type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </label>
            </form>

            {/* Perfil */}
            <div className="dropdown dropdown-end">
              {props.user ? (
                <>
                  <div className="avatar placeholder" tabIndex={0} role="button">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      <span>{props.user.name}</span>
                    </div>
                  </div>

                  {/* Dropdown perfil */}
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a href="/admin">Administração</a>
                    </li>
                    <li>
                      <form action="/logout" method="POST" className="block p-0">
                        <input type="hidden" name="_csrf" value="{{@root.csrf}}" />
                        <button type="submit" className="w-full text-left px-3 py-1">
                          Sair
                        </button>
                      </form>
                    </li>
                  </ul>
                </>
              ) : (
                <a href="/login" className="btn btn-ghost btn-sm">
                  Entrar
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.detalhe}></div>
    </>
  )
}
