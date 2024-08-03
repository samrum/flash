import { Suspense, lazy } from 'react'

const Flash = lazy(() => import('./Flash'))

export default function App() {
  const version = import.meta.env.VITE_PUBLIC_GIT_SHA || 'dev'
  console.info(`flash.comma.ai version: ${version}`)

  return (
    <Suspense>
      <Flash />
    </Suspense>
  )
}
