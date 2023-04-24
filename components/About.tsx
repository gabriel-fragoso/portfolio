export default function About({ id }: { id: string }) {
  return (
    <div id={id} className="my-52 flex items-center justify-between flex-wrap about-group">
      <div>
        <h1 className="uppercase text-white font-bold text-[28px] about-h1">Um pouco sobre mim</h1>
        <p className="text-[36px] text-[#E3E4E68C] about">
          Sou um Desenvolvedor apaixonado por <br /> criar
          <strong className="text-white">
            {" "}experiências digitais bonitas e <br />alegres. Além do código, adoro <br /> música, jogos e viagens.
          </strong>
        </p>
      </div>
      <div className="flex items-center gap-5 flex-wrap image-about">
        <img src="/image.png" alt="Imagem Video Game" className="h-[408px] w-[282px]" />
        <div className="flex flex-col gap-5 flex-wrap">
          <img src="/image2.png" alt="Imagem Música" className="h-[408px] w-[282px]" />
          <img src="/image3.png" alt="Imagem Viagens" className="h-[408px] w-[282px]" />
        </div>
      </div>
    </div>
  )
}
