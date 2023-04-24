import { Link } from "react-scroll"

export default function Header() {
  return (
    <header className="flex items-center justify-between w-[100vw] py-6 px-32 fixed top-0 left-0 right-0 bg-black header">
      <h1 className="font-logo text-[#1A6FB2] text-[24px]">GABRIEL</h1>
      <ul className="flex gap-6 text-[#E3E4E6] font-bold ul">
        <li>
          <Link className="link" to="apresentacao" smooth={true} duration={500}>
            APRESENTAÇÃO
          </Link>
        </li>
        <li>
          <Link className="link" to="clientes" smooth={true} duration={500}>
            CLIENTES
          </Link>
        </li>
        <li>
          <Link className="link" to="trabalho" smooth={true} duration={500}>
            TRABALHO
          </Link>
        </li>
        <li>
          <Link className="link" to="sobre-mim" smooth={true} duration={500}>
            SOBRE MIM
          </Link>
        </li>
      </ul>
    </header>
  )
}
