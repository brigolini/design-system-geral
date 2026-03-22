import { Outlet, Link, Scripts, ScrollRestoration } from 'react-router';
import { AlmgToastProvider, AlmgToastContainer } from '@almg/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../../styles/src/al-ui.css';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ALMG Example</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AlmgToastProvider>
            <nav style={{ display: 'flex', gap: '16px', padding: '16px', borderBottom: '1px solid var(--color-almg-brand-secondary)' }}>
              <Link to="/" style={{ fontWeight: 'bold' }}>Inicio</Link>
              <Link to="/estados">Estados</Link>
              <Link to="/cidades">Cidades</Link>
              <Link to="/pessoas">Pessoas</Link>
            </nav>
            <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
              <Outlet />
            </main>
            <AlmgToastContainer />
          </AlmgToastProvider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
