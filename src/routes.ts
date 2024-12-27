import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('lib/pages/home/index.tsx'),
  layout('lib/layout/components/header-layout.tsx', [
    route('generate', 'lib/pages/generate/index.tsx'),
  ]),
  route('*', 'lib/pages/404.tsx'),
] satisfies RouteConfig;
