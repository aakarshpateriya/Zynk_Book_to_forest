
import { ArrowLeft, ArrowRight, Check, Leaf, TreePine } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const trees = [
  {
    id: 1,
    name: 'Mango Tree',
    description: 'A beautiful fruit-bearing tree that adds shade and life to the farm.',
    benefit: 'Fruit bearing',
    emoji: '🥭',
  },
  {
    id: 2,
    name: 'Orange Tree',
    description: 'A vibrant fruit tree that brings freshness and greenery to the farm.',
    benefit: 'Fruit bearing',
    emoji: '🍊',
  },
  {
    id: 3,
    name: 'Pomegranate Tree',
    description: 'A hardy and beautiful tree known for its nutritious fruits.',
    benefit: 'Fruit bearing',
    emoji: '❤️',
  },
  {
    id: 4,
    name: 'Chikoo Tree',
    description: 'A lush fruit tree that grows beautifully in warm environments.',
    benefit: 'Fruit bearing',
    emoji: '🍈',
  },
  {
    id: 5,
    name: 'Banana Tree',
    description: 'A fast-growing tropical plant that adds rich greenery to the farm.',
    benefit: 'Fruit bearing',
    emoji: '🍌',
  },

]

function ChooseTree() {
  const navigate = useNavigate()

  const [selectedTree, setSelectedTree] = useState(null)

  const handleContinue = () => {
    if (!selectedTree) return

    navigate('/choose-spot', {
      state: {
        tree: selectedTree,
      },
    })
  }

  return (
    <div className="choose-tree-page">

      {/* Header */}
      <header className="tree-page-header">
        <button
          className="back-button"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="tree-page-progress">
          <span className="progress-active">1</span>
          <span className="progress-line"></span>
          <span>2</span>
          <span className="progress-line"></span>
          <span>3</span>
        </div>

        <div className="tree-page-step">
          Step 1 of 3
        </div>
      </header>


      {/* Main content */}
      <main className="choose-tree-content">

        <div className="choose-tree-heading">

          <div className="tree-heading-badge">
            <Leaf size={17} />
            ZYNKLY GREEN INITIATIVE
          </div>

          <h1>
            Choose Your <span>Tree</span>
          </h1>

          <p>
            Pick a tree you'd like to plant and help us
            create a greener tomorrow.
          </p>

        </div>


        {/* Tree cards */}
        <section className="tree-grid">

          {trees.map((tree) => {
            const isSelected = selectedTree?.id === tree.id

            return (
              <article
                key={tree.id}
                className={`tree-card ${
                  isSelected ? 'selected' : ''
                }`}
                onClick={() => setSelectedTree(tree)}
              >

                {isSelected && (
                  <div className="selected-check">
                    <Check size={17} />
                  </div>
                )}

                <div className="tree-image">
                  <span>{tree.emoji}</span>
                </div>

                <div className="tree-card-content">

                  <div className="tree-card-title">
                    <TreePine size={19} />
                    <h2>{tree.name}</h2>
                  </div>

                  <p>
                    {tree.description}
                  </p>

                  <div className="tree-benefit">
                    <Leaf size={15} />
                    {tree.benefit}
                  </div>

                </div>

                <button
                  className={`select-tree-button ${
                    isSelected ? 'selected-button' : ''
                  }`}
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedTree(tree)
                  }}
                >
                  {isSelected ? 'Selected' : 'Select Tree'}
                </button>

              </article>
            )
          })}

        </section>


        {/* Continue */}
        <div className="tree-continue-section">

          <p>
            {selectedTree
              ? `${selectedTree.name} selected`
              : 'Select a tree to continue'}
          </p>

          <button
            className="tree-continue-button"
            disabled={!selectedTree}
            onClick={handleContinue}
          >
            Continue to Choose Spot
            <ArrowRight size={19} />
          </button>

        </div>

      </main>

    </div>
  )
}

export default ChooseTree
