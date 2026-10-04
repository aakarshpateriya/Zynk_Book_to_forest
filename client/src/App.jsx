
import { useState } from 'react'
import Welcome from './pages/Welcome'
import ChooseTree from './pages/ChooseTree'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')

  if (currentPage === 'choose-tree') {
    return (
      <ChooseTree
        onBack={() => setCurrentPage('welcome')}
        onContinue={(tree) => {
          console.log('Selected tree:', tree)
        }}
      />
    )
  }

  return (
    <Welcome
      onGetStarted={() => setCurrentPage('choose-tree')}
    />
  )
}

export default App