import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  index('routes/pages/home.tsx'),

  // Estados
  route('estados', 'routes/pages/estados/list.tsx'),
  route('estados/novo', 'routes/pages/estados/new.tsx'),
  route('estados/:id', 'routes/pages/estados/edit.tsx'),

  // Cidades
  route('cidades', 'routes/pages/cidades/list.tsx'),
  route('cidades/novo', 'routes/pages/cidades/new.tsx'),
  route('cidades/:id', 'routes/pages/cidades/edit.tsx'),

  // Pessoas
  route('pessoas', 'routes/pages/pessoas/list.tsx'),
  route('pessoas/novo', 'routes/pages/pessoas/new.tsx'),
  route('pessoas/:id', 'routes/pages/pessoas/edit.tsx'),

  // API
  route('api/estados/search', 'routes/api/estados.search.tsx'),
  route('api/cidades/search', 'routes/api/cidades.search.tsx'),
  route('api/cidades/by-estado', 'routes/api/cidades.by-estado.tsx'),
] satisfies RouteConfig;
