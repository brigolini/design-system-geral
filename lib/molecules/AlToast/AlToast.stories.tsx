import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlToastContainer } from './AlToast';
import { AlToastProvider, useAlToast } from './AlToastContext';
import { AlButton } from '../../atoms/AlButton';

const meta: Meta<typeof AlToastContainer> = {
  title: 'Molecules/AlToast',
  component: AlToastContainer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AlToastProvider>
        <Story />
      </AlToastProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const { addToast } = useAlToast();

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <AlButton
        intent="primary"
        onClick={() => addToast({ intent: 'primary', title: 'Sucesso', message: 'Operação concluída com sucesso.' })}
      >
        Toast de Sucesso
      </AlButton>
      <AlButton
        intent="danger"
        onClick={() => addToast({ intent: 'danger', title: 'Erro', message: 'Algo deu errado.' })}
      >
        Toast de Erro
      </AlButton>
      <AlButton
        intent="warning"
        onClick={() => addToast({ intent: 'warning', title: 'Aviso', message: 'Por favor, verifique sua entrada.' })}
      >
        Toast de Aviso
      </AlButton>
      <AlButton
        intent="secondary"
        onClick={() => addToast({ intent: 'secondary', message: 'Uma notificação neutra.' })}
      >
        Toast Informativo
      </AlButton>
      <AlButton
        intent="secondary"
        onClick={() => addToast({ intent: 'primary', title: 'Persistente', message: 'Esta permanece até ser dispensada.', duration: 0 })}
      >
        Toast Persistente
      </AlButton>
      <AlToastContainer />
    </div>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};
