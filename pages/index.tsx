import About from '@/components/About'
import Apresentação from '@/components/Apresentação'
import Clientes from '@/components/Clientes'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Trabalho from '@/components/Trabalho'

import { Scrollama, Step } from "react-scrollama";
import { useState } from "react";


export default function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleStepEnter = ({ data }: any) => {
    setCurrentStepIndex(data);
  };

  const steps = [
    {
      id: "step1",
      content: <Apresentação id='apresentacao' />,
    },
    {
      id: "step2",
      content: <Clientes id="clientes" />,
    },
    {
      id: "step3",
      content: <Trabalho id="trabalho" />,
    },
    {
      id: "step4",
      content: <About id="sobre-mim" />,
    },
  ];

  return (
    <>
      <Header />
      <Scrollama onStepEnter={handleStepEnter}>
        {steps.map((step, index) => (
          <Step key={step.id} data={index}>
            <div
              className={`item ${index === currentStepIndex ? "is-active" : ""}`}
            >
              {step.content}
            </div>
          </Step>
        ))}
      </Scrollama>
      <Footer />
    </>
  )
}
