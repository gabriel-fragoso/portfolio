export default function Trabalho({ id }: { id: string }) {
  return (
    <div id={id} className="group-work">
      <h1 className="text-[36px] text-[#E3E4E68C] mt-60 mb-20 work-select"><strong className="text-white">Trabalhos </strong>Selecionados</h1>
      <div className="flex flex-col gap-14 flex-wrap">

        <div className="flex items-center gap-10 mr-auto flex-wrap content-work">
          <img src="/promo.png" alt="Imagem projeto Promoação" />
          <div className="gap-8 flex flex-col flex-wrap description">
            <h1 className="font-bold text-white uppercase">Promoação BackOffice</h1>
            <p className="text-2xl text-[#E3E4E68C]">
              Projeto da empresa Promoação,<br />
              com intuito de gerenciar passageiros<br /> e informações do e-commerce<br />desenvolvido com <strong className="text-white">ReactJs, Redux, Laravel... <br /></strong>
              O projeto levou em torno de 5 meses.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10 ml-auto flex-wrap content-work">
          <div className="gap-8 flex flex-col flex-wrap description">
            <h1 className="font-bold text-white uppercase">LAB510 Consultancy</h1>
            <p className="text-2xl text-[#E3E4E68C]">
              Trabalhei no projeto de consultoria da<br /> empresa LAB510,
              website foi desenvolvido <br /> com <strong className="text-white">NextJs, Saas, Typescript... <br /></strong>
              O projeto levou em torno de <br /> 2 meses, e foram construidas 2 versões!
            </p>
          </div>
          <img src="/lab.png" alt="Imagem projeto LAB510" />
        </div>

        <div className="flex items-center gap-10 mr-auto flex-wrap content-work">
          <img src="/promo2.png" alt="Imagem projeto Promoação E-commerce" />
          <div className="gap-8 flex flex-col flex-wrap description">
            <h1 className="font-bold text-white uppercase">Promoação E-commerce</h1>
            <p className="text-2xl text-[#E3E4E68C]">
              Trabalhei no projeto de e-commerce pela<br /> empresa Promoação,
              onde foi construído <br /> com <strong className="text-white">JQuery, C#, Bootstrap,  entre outras  <br />tecnologias... </strong>
              Projeto levou em torno de <br /> 4 meses, e foi um tempo de bastante <strong className="text-white"> aprendizado!</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-10 ml-auto flex-wrap content-work">
          <div className="gap-8 flex flex-col flex-wrap description">
            <h1 className="font-bold text-white uppercase">Em andamento...</h1>
            <p className="text-2xl text-[#E3E4E68C]">
              EM ANDAMENTO...
            </p>
          </div>
          <img width={591} height={500} className="rounded-[16px] brightness-[10%]" src="/andamento.png" alt="" />
        </div>

      </div>
    </div>
  )
}
