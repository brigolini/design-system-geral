import type { Meta, StoryObj } from '@storybook/react-vite';
import { AlmgToastContainer } from './AlToast';
import { AlmgToastProvider, useAlmgToast } from './AlToastContext';
import { AlmgButton } from '../../primitives/AlmgButton';

const meta: Meta<typeof AlmgToastContainer> = {
  title: 'Forms/AlmgToast',
  component: AlmgToastContainer,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <AlmgToastProvider>
        <Story />
      </AlmgToastProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const { addToast } = useAlmgToast();

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <AlmgButton
        intent="primary"
        onClick={() => addToast({ intent: 'primary', title: 'Sucesso', message: 'Operação concluída com sucesso.' })}
      >
        Toast de Sucesso
      </AlmgButton>
      <AlmgButton
        intent="danger"
        onClick={() => addToast({ intent: 'danger', title: 'Erro', message: 'Algo deu errado.' })}
      >
        Toast de Erro
      </AlmgButton>
      <AlmgButton
        intent="warning"
        onClick={() => addToast({ intent: 'warning', title: 'Aviso', message: 'Por favor, verifique sua entrada.' })}
      >
        Toast de Aviso
      </AlmgButton>
      <AlmgButton
        intent="secondary"
        onClick={() => addToast({ intent: 'secondary', message: 'Uma notificação neutra.' })}
      >
        Toast Informativo
      </AlmgButton>
      <AlmgButton
        intent="secondary"
        onClick={() => addToast({ intent: 'primary', title: 'Persistente', message: 'Esta permanece até ser dispensada.', duration: 0 })}
      >
        Toast Persistente
      </AlmgButton>
      <AlmgToastContainer />
    </div>
  );
}

export const Default: Story = {
  render: () => <ToastDemo />,
};
