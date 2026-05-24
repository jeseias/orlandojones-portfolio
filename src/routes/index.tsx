import { createFileRoute } from '@tanstack/react-router'
import { LandingPage } from '../features'

export const Route = createFileRoute('/')({
  component: LandingPage,
})