import { AlmgButton, AlmgAccordion, AlmgCard, AlmgGrid, AlmgGridItem } from '@almg/native';
import { Link } from 'react-router';

const faqItems = [
  { id: '1', title: 'O que e este projeto?', content: 'E um projeto de exemplo que demonstra a arquitetura recomendada usando @almg/native.' },
  { id: '2', title: 'Quais CRUDs estao disponiveis?', content: 'Estados, Cidades e Pessoas com enderecos.' },
  { id: '3', title: 'Qual a stack utilizada?', content: 'React 19, React Router 7, TanStack Query, React Hook Form, Zod e @almg/native.' },
];

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: 'var(--font-size-almg-2xl)', fontWeight: 'var(--font-weight-almg-bold)', marginBottom: '24px' }}>
        Projeto Exemplo ALMG
      </h1>
      <p style={{ marginBottom: '24px', color: 'var(--color-almg-brand-font-secondary)' }}>
        Demonstracao da arquitetura recomendada com componentes @almg/native.
      </p>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <Link to="/estados"><AlmgButton intent="primary">Estados</AlmgButton></Link>
        <Link to="/cidades"><AlmgButton intent="secondary">Cidades</AlmgButton></Link>
        <Link to="/pessoas"><AlmgButton intent="secondary">Pessoas</AlmgButton></Link>
      </div>
      <h2 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-semibold)', marginBottom: '16px' }}>
        Perguntas Frequentes
      </h2>
      <AlmgAccordion
        items={faqItems.map(item => ({
          ...item,
          content: <p>{item.content}</p>
        }))}
      />

      <h2 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-semibold)', margin: '32px 0 16px' }}>
        Componentes de Layout
      </h2>

      <h3 style={{ fontSize: 'var(--font-size-almg-base)', fontWeight: 'var(--font-weight-almg-medium)', marginBottom: '12px' }}>
        Grid 12 colunas — spans diferentes por linha
      </h3>
      <AlmgGrid columns={12} gap="md">
        <AlmgGridItem span={4}>
          <AlmgCard title="Span 4">
            <p>Este card ocupa 4 de 12 colunas.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem span={8}>
          <AlmgCard title="Span 8">
            <p>Este card ocupa 8 de 12 colunas.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem span={6}>
          <AlmgCard title="Span 6">
            <p>Metade esquerda.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem span={6}>
          <AlmgCard title="Span 6">
            <p>Metade direita.</p>
          </AlmgCard>
        </AlmgGridItem>
      </AlmgGrid>

      <h3 style={{ fontSize: 'var(--font-size-almg-base)', fontWeight: 'var(--font-weight-almg-medium)', margin: '24px 0 12px' }}>
        Grid 3 colunas
      </h3>
      <AlmgGrid columns={3} gap="md">
        <AlmgGridItem>
          <AlmgCard title="Estados">
            <p>Gerenciamento de estados brasileiros.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem>
          <AlmgCard title="Cidades">
            <p>Cadastro de cidades por estado.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem>
          <AlmgCard title="Pessoas">
            <p>Cadastro de pessoas com enderecos.</p>
          </AlmgCard>
        </AlmgGridItem>
      </AlmgGrid>

      <h3 style={{ fontSize: 'var(--font-size-almg-base)', fontWeight: 'var(--font-weight-almg-medium)', margin: '24px 0 12px' }}>
        Grid 2 colunas
      </h3>
      <AlmgGrid columns={2} gap="lg">
        <AlmgGridItem>
          <AlmgCard title="Coluna 1">
            <p>Layout de duas colunas com gap grande.</p>
          </AlmgCard>
        </AlmgGridItem>
        <AlmgGridItem>
          <AlmgCard title="Coluna 2">
            <p>Ideal para dashboards e paineis.</p>
          </AlmgCard>
        </AlmgGridItem>
      </AlmgGrid>
    </div>
  );
}
