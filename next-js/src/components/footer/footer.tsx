import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export function Footer() {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 text-base-content mt-8 container mx-auto max-w-6xl">
        <aside>
          <Image src={logo} alt="Logo" className="h-10 w-32" />
          <p>
            Kardapyo Lanches
            <br />
            Desenvolvido por Jefferson Dantas
            <br />
            <br />
            <b>
              Este site é apenas um design,
              <br />
              não se trata de um comércio real
            </b>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Redes sociais</h6>
          <a className="link link-hover">
            <FontAwesomeIcon fixedWidth icon={faInstagram} /> Instagram
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon fixedWidth icon={faFacebook} /> Facebook
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon fixedWidth icon={faYoutube} /> YouTube
          </a>
          <a className="link link-hover">
            <FontAwesomeIcon fixedWidth icon={faXTwitter} /> Twitter (X)
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Empresa</h6>
          <a target="_blank" href="https://jeffersondantas.vercel.app" className="link link-hover">
            Sobre nós
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/jose-jefferson" className="link link-hover">
            Contato
          </a>
          <a target="_blank" href="https://github.com/josejefferson" className="link link-hover">
            GitHub
          </a>
          <a target="_blank" href="https://github.com/josejefferson/kardapyo" className="link link-hover">
            Código Fonte
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Termos de Uso</a>
          <a className="link link-hover">Política de Privacidade</a>
          <a className="link link-hover">Política de Cookies</a>
        </nav>
      </footer>
    </div>
  )
}
