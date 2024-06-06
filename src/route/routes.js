import { Router, Route } from 'electron-router-dom'

import { MainScreen, AboutScreen, SearchScreen } from './screens'

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
    />
  )
}