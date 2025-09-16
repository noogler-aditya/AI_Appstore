'use client'

import { useState } from 'react'
import { Search, Filter, X, ChevronDown } from 'lucide-react'

interface SearchFilterProps {
    onSearch: (query: string) => void
    onCategoryFilter: (categories: string[]) => void
    onPriceFilter: (priceRange: string) => void
    onRatingFilter: (minRating: number) => void
}

const categories = [
    'AI Assistant',
    'Writing',
    'Design',
    'Coding',
    'Productivity',
    'Video',
    'Audio',
    'Marketing',
    'Analytics',
    'Automation'
]

const priceRanges = [
    { label: 'All Prices', value: 'all' },
    { label: 'Free', value: 'free' },
    { label: 'Under $10/mo', value: 'under-10' },
    { label: '$10-50/mo', value: '10-50' },
    { label: '$50+/mo', value: '50-plus' }
]

export default function SearchFilter({
    onSearch,
    onCategoryFilter,
    onPriceFilter,
    onRatingFilter
}: SearchFilterProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedPriceRange, setSelectedPriceRange] = useState('all')
    const [selectedRating, setSelectedRating] = useState(0)
    const [showFilters, setShowFilters] = useState(false)

    const handleSearchChange = (query: string) => {
        setSearchQuery(query)
        onSearch(query)
    }

    const handleCategoryToggle = (category: string) => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category]

        setSelectedCategories(newCategories)
        onCategoryFilter(newCategories)
    }

    const handlePriceChange = (priceRange: string) => {
        setSelectedPriceRange(priceRange)
        onPriceFilter(priceRange)
    }

    const handleRatingChange = (rating: number) => {
        setSelectedRating(rating)
        onRatingFilter(rating)
    }

    const clearAllFilters = () => {
        setSelectedCategories([])
        setSelectedPriceRange('all')
        setSelectedRating(0)
        onCategoryFilter([])
        onPriceFilter('all')
        onRatingFilter(0)
    }

    const activeFiltersCount = selectedCategories.length +
        (selectedPriceRange !== 'all' ? 1 : 0) +
        (selectedRating > 0 ? 1 : 0)

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Search Bar */}
            <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search AI tools..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                    {activeFiltersCount > 0 && (
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                            {activeFiltersCount}
                        </span>
                    )}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>

                {activeFiltersCount > 0 && (
                    <button
                        onClick={clearAllFilters}
                        className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                    >
                        Clear all
                    </button>
                )}
            </div>

            {/* Filters */}
            {showFilters && (
                <div className="space-y-6 border-t border-gray-200 pt-4">
                    {/* Categories */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryToggle(category)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${selectedCategories.includes(category)
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                    {selectedCategories.includes(category) && (
                                        <X className="w-3 h-3 ml-1 inline" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
                        <div className="space-y-2">
                            {priceRanges.map((range) => (
                                <label key={range.value} className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="priceRange"
                                        value={range.value}
                                        checked={selectedPriceRange === range.value}
                                        onChange={(e) => handlePriceChange(e.target.value)}
                                        className="text-primary focus:ring-primary"
                                    />
                                    <span className="text-sm text-gray-700">{range.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Rating */}
                    <div>
                        <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => handleRatingChange(rating === selectedRating ? 0 : rating)}
                                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${selectedRating >= rating
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <span>{rating}</span>
                                    <span className="text-yellow-400">★</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {selectedCategories.map((category) => (
                            <span
                                key={category}
                                className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs"
                            >
                                <span>{category}</span>
                                <button
                                    onClick={() => handleCategoryToggle(category)}
                                    className="hover:text-primary/80"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        ))}

                        {selectedPriceRange !== 'all' && (
                            <span className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                                <span>{priceRanges.find(r => r.value === selectedPriceRange)?.label}</span>
                                <button
                                    onClick={() => handlePriceChange('all')}
                                    className="hover:text-primary/80"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}

                        {selectedRating > 0 && (
                            <span className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                                <span>{selectedRating}+ stars</span>
                                <button
                                    onClick={() => handleRatingChange(0)}
                                    className="hover:text-primary/80"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}