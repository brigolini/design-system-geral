import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlStepper } from './AlStepper';
import { AlButton } from '../../atoms/AlButton';

const meta: Meta<typeof AlStepper> = {
  title: 'Organisms/AlStepper',
  component: AlStepper,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState(0);
    const steps = [
      { label: 'Informações Pessoais', content: <div><h3>Passo 1: Informações Pessoais</h3><p>Preencha seu nome e dados de contato.</p></div> },
      { label: 'Endereço', content: <div><h3>Passo 2: Endereço</h3><p>Informe seu endereço de entrega.</p></div> },
      { label: 'Pagamento', content: <div><h3>Passo 3: Pagamento</h3><p>Insira os dados de pagamento.</p></div> },
      { label: 'Revisão', content: <div><h3>Passo 4: Revisão</h3><p>Revise e confirme seu pedido.</p></div> },
    ];

    return (
      <div>
        <AlStepper steps={steps} activeStep={active} onStepChange={setActive} />
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <AlButton intent="secondary" onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}>
            Voltar
          </AlButton>
          <AlButton onClick={() => setActive(Math.min(steps.length - 1, active + 1))} disabled={active === steps.length - 1}>
            Próximo
          </AlButton>
        </div>
      </div>
    );
  },
};
