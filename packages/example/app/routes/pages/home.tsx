import { AlmgButton, AlmgAccordion } from '@almg/native';
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
    </div>
  );
}
