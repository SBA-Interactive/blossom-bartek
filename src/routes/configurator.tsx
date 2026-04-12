import { createFileRoute } from '@tanstack/react-router'
import ConfiguratorPage from '@/container/Configurator'

export const Route = createFileRoute('/configurator')({
  component: ConfiguratorPage,
})
