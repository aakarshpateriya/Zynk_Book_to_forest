
import { useState } from 'react'
import { ArrowLeft, Search, SlidersHorizontal } from 'lucide-react'
import TreeCard from '../components/TreeCard'

const trees = [
  {
    id: 1,
    name: 'Neem Tree',
    description:
      'A beautiful, hardy tree known for its fresh green leaves and natural benefits.',
    location: 'Zynkly Forest',
    emoji: '🌳',
    category: 'Native',
  },
  {
    id: 2,
    name: 'Mango Tree',
    description:
      'A vibrant fruit-bearing tree that adds life and greenery to the forest.',
    location: 'Zynkly Forest',
    emoji: '🥭',
    category: 'Fruit',
  },
  {
    id: 3,
    name: 'Peepal Tree',
    description:
      'A meaningful native tree with lush foliage and a beautiful natural canopy.',
    location: 'Zynkly Forest',
    emoji: '🌿',
    category: 'Native',
  },
  {
    id: 4,
    name: 'Gulmohar Tree',
    description:
      'A colourful flowering tree that brings beauty and character to the landscape.',
    location: 'Zynkly Forest',
    emoji: '🌺',
    category: 'Flowering',
  },
  {
    id: 5,
    name: 'Jamun Tree',
    description:
      'A strong evergreen tree with dense foliage and delicious seasonal fruit.',
    location: 'Zynkly Forest',
    emoji: '🌳',
    category: 'Fruit',
  },
  {
    id: 6,
    name: 'Banyan Tree',
    description:
      'A majestic long-lived tree with a wide canopy and deep natural roots.',
    location: 'Zynkly Forest',
    emoji: '🌴',
    category: 'Native',
  },
]

function ChooseTree() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', 'Native', 'Fruit', 'Flowering']

  const filteredTrees = trees.filter((tree) => {
    const matchesSearch =
      tree.name.toLowerCase().includes(search.toLowerCase()) ||
      tree.description.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || tree.category === category

    return matchesSearch && matchesCategory
  })

  const handleSelectTree = (tree) => {
    console.log('Selected tree:', tree)
  }

  return (
    <div className="choose-tree-page">
      <header className="catalogue-navbar">
        <button
          className="back-button"
          onClick={() => window.history.back()}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="catalogue-logo">Zynkly</div>

        <div className="catalogue-step">
          Step <strong>1</strong> of 3
        </div>
      </header>

      <main className="tree-catalogue">
        <section className="catalogue-header">
          <span className="catalogue-badge">
            🌱 Plant a little happiness
          </span>

          <h1>
            Choose Your <span>Tree</span>
          </h1>

          <p>
            Pick a tree you'd like to grow in your virtual forest.
            Every tree you choose becomes part of your Zynkly journey.
          </p>
        </section>

        <section className="catalogue-tools">
          <div className="search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search for a tree..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div className="category-filter">
            <SlidersHorizontal size={17} />

            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? 'active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="tree-grid">
          {filteredTrees.length > 0 ? (
            filteredTrees.map((tree) => (
              <TreeCard
                key={tree.id}
                tree={tree}
                onSelect={handleSelectTree}
              />
            ))
          ) : (
            <div className="no-results">
              <div>🌱</div>
              <h3>No trees found</h3>
              <p>Try searching for another tree.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default ChooseTree