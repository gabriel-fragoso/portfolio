export default function Clientes({ id }: { id: string }) {
  return (
    <div id={id}>
      <p className="text-[36px] text-[#E3E4E68C] mt-60 clientes">
        Alguns dos
        <strong className="text-white"> clientes onde já atuei e</strong> desenvolvi {" "}
        <strong className="text-white underline">Projetos!</strong>
      </p>
      <div className="flex items-center justify-center gap-40 mt-24 flex-wrap">
        <img className="image-logo" src='/lab.svg' width={300} />
        <img className="image-logo" src='/truckhelp.svg' width={300} />
        <img className="image-logo" src='/bizcommerce.svg' width={300} />
        <img className="image-logo" src='/promoacao.png' width={300} />
      </div>
    </div>
  )
}
