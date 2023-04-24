import Link from 'next/link'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center footer-group">
      <h1 className="text-[54px] text-[#E3E4E68C] text-center footer-h1">Entrar <strong className="text-white">em Contato.</strong></h1>
      <h2 className="text-white text-sm mt-2">Para que possamos falar mais sobre...</h2>
      <div className="flex items-center justify-center gap-16 my-14 social">
        <Link href='https://www.instagram.com/gabrielfragoso__/'>
          <AiOutlineInstagram size={38} color='#E3E4E68C' />
        </Link>
        <Link href='https://wa.me/+5583998304284'>
          <AiOutlineWhatsApp size={38} color='#E3E4E68C' />
        </Link>
        <Link href='https://mail.google.com/mail/u/0/#sent/KtbxLwghgzzWnGLqQPllsGwNbJTwlmmDnB'>
          <AiOutlineMail size={38} color='#E3E4E68C' />
        </Link>
        <Link href='https://www.linkedin.com/in/gabriel-fragoso/'>
          <AiOutlineLinkedin size={38} color='#E3E4E68C' />
        </Link>
      </div>
      <p className='text-[#E3E4E68C] mb-14'>Feito com ❣️ por <strong className='text-white'>Gabriel Fragoso</strong></p>
    </footer>
  )
}
