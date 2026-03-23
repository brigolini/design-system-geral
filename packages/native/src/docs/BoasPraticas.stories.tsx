import type { Meta, StoryObj } from '@storybook/react-vite';

const DocsLinks = () => {
  const docs = [
    { title: 'Introdução', file: '01-introducao.html', description: 'Visão geral, stack recomendada e estrutura de projeto' },
    { title: 'Como Adicionar a Biblioteca', file: '02-como-adicionar.html', description: 'Instalação, configuração do Vite/TypeScript e providers' },
    { title: 'Design Responsivo', file: '03-design-responsivo.html', description: 'Sistema de grid, tokens CSS e layouts adaptáveis' },
    { title: 'Criando Formulários', file: '04-criando-formularios.html', description: 'React Hook Form + Zod, campos dinâmicos e stepper' },
    { title: 'Buscando e Salvando Dados', file: '05-buscando-salvando-dados.html', description: 'Arquitetura schema → service → repository' },
  ];

  return (
    <div style={{ maxWidth: '720px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '8px', color: '#CF4D56' }}>
        Boas Práticas — @almg/native
      </h1>
      <p style={{ color: '#555', marginBottom: '32px', fontSize: '1rem', lineHeight: 1.6 }}>
        Guias de referência para construir aplicações com a biblioteca de componentes.
        Cada página abre em uma nova aba.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {docs.map((doc) => (
          <a
            key={doc.file}
            href={`./docs/${doc.file}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '16px 20px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#CF4D56';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(207, 77, 86, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1rem', color: '#CF4D56' }}>
                  {doc.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '4px' }}>
                  {doc.description}
                </div>
              </div>
              <span style={{ fontSize: '1.2rem', color: '#999' }}>↗</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Boas Práticas',
  component: DocsLinks,
};

export default meta;

type Story = StoryObj;

export const Guias: Story = {};
