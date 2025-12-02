import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react'
import { VehicleSpecsProps } from '../types/automotive.types'

export const VehicleSpecs: React.FC<VehicleSpecsProps> = ({
  specifications,
  features,
  className = '',
  expandable = true
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(specifications.slice(0, 2).map(spec => spec.category))
  )
  const [showAllFeatures, setShowAllFeatures] = useState(false)

  const toggleSection = (category: string) => {
    if (!expandable) return
    
    setExpandedSections(prev => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  const standardFeatures = features.filter(f => f.included && f.category === 'standard')
  const optionalFeatures = features.filter(f => f.category === 'optional')
  const packageFeatures = features.filter(f => f.category === 'package')

  const displayedFeatures = showAllFeatures 
    ? [...standardFeatures, ...optionalFeatures, ...packageFeatures]
    : standardFeatures.slice(0, 8)

  return (
    <div className={`vehicle-specs ${className}`}>
      {/* Specifications */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Vehicle Specifications</h3>
        
        {specifications.map(spec => {
          const isExpanded = expandedSections.has(spec.category)
          
          return (
            <div key={spec.category} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(spec.category)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
                disabled={!expandable}
              >
                <h4 className="font-semibold text-gray-900 capitalize">{spec.category}</h4>
                {expandable && (
                  <div className="text-gray-500">
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                )}
              </button>
              
              {(isExpanded || !expandable) && (
                <div className="px-6 py-4 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {spec.specs.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 text-sm">{item.label}</span>
                        <span className="font-medium text-gray-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Features */}
      {features.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Features & Equipment</h3>
            {standardFeatures.length > 8 && (
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                {showAllFeatures ? 'Show Less' : 'Show All Features'}
              </button>
            )}
          </div>

          {/* Feature Categories Tabs */}
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button className="py-2 px-1 border-b-2 border-blue-500 text-blue-600 text-sm font-medium">
                  Standard ({standardFeatures.length})
                </button>
                {optionalFeatures.length > 0 && (
                  <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm font-medium">
                    Optional ({optionalFeatures.length})
                  </button>
                )}
                {packageFeatures.length > 0 && (
                  <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm font-medium">
                    Packages ({packageFeatures.length})
                  </button>
                )}
              </nav>
            </div>
          </div>

          {/* Standard Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {displayedFeatures.map(feature => (
              <div 
                key={feature.id} 
                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 mt-0.5">
                  {feature.included ? (
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                      <X className="h-3 w-3 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {feature.name}
                  </div>
                  {feature.description && (
                    <div className="text-xs text-gray-500 mt-1">
                      {feature.description}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1 capitalize">
                    {feature.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Features */}
          {optionalFeatures.length > 0 && showAllFeatures && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Optional Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {optionalFeatures.map(feature => (
                  <div 
                    key={feature.id} 
                    className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-600 font-bold">+</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {feature.name}
                      </div>
                      {feature.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {feature.description}
                        </div>
                      )}
                      <div className="text-xs text-blue-600 mt-1 font-medium">
                        Optional Add-on
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package Features */}
          {packageFeatures.length > 0 && showAllFeatures && (
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {packageFeatures.map(feature => (
                  <div 
                    key={feature.id} 
                    className="flex items-start space-x-3 p-3 rounded-lg border border-purple-200 bg-purple-50 hover:bg-purple-100 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-xs text-purple-600 font-bold">P</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        {feature.name}
                      </div>
                      {feature.description && (
                        <div className="text-xs text-gray-500 mt-1">
                          {feature.description}
                        </div>
                      )}
                      <div className="text-xs text-purple-600 mt-1 font-medium">
                        Package Feature
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Feature Summary */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{standardFeatures.length}</div>
            <div className="text-sm text-gray-600">Standard Features</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{optionalFeatures.length}</div>
            <div className="text-sm text-gray-600">Optional Features</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">{packageFeatures.length}</div>
            <div className="text-sm text-gray-600">Package Features</div>
          </div>
        </div>
      </div>
    </div>
  )
}