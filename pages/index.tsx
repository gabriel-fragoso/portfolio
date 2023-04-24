import About from '@/components/About'
import Apresentação from '@/components/Apresentação'
import Clientes from '@/components/Clientes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Trabalho from '@/components/Trabalho'
export default function Home() {

  return (
    <>
      <Header />
      <Apresentação id='apresentacao' />
      <Clientes id="clientes" />
      <Trabalho id="trabalho" />
      <About id="sobre-mim" />
      <Footer />
    </>
  )
}
