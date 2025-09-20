export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            {/* Breadcrumb Skeleton */}
            <div className="flex items-center space-x-2 mb-8">
              <div className="h-4 bg-gray-200 rounded w-12"></div>
              <div className="h-4 bg-gray-200 rounded w-1"></div>
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
            
            {/* Back Button Skeleton */}
            <div className="h-6 bg-gray-200 rounded w-32 mb-6"></div>
            
            {/* Title Skeleton */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="h-12 bg-gray-200 rounded w-80 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-6"></div>
              <div className="h-10 bg-gray-200 rounded-full w-40 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Grid Skeleton */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="card p-6 animate-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 bg-gray-200 rounded-xl"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="w-5 h-5 bg-gray-200 rounded"></div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}