import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Apresentação({ id }: { id: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-60 apresentacao-div' id={id}>
      <p className="text-[54px] text-[#E3E4E68C] text-center mt-60 apresentacao">
        Olá, seja bem vindo ao meu portfólio!
        <br />
        Me chamo Gabriel e sou Desenvolvedor
        <br />
        <strong className="text-white">Full Stack</strong>
      </p>
      <MdKeyboardArrowDown className='arrow' color='#FFF' size={36} />
    </div>
  )
}
