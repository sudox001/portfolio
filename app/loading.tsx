import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}

// Loading skeleton for sections
export function SectionLoading() {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="space-y-8 animate-pulse">
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-800 rounded mx-auto" />
          <div className="h-4 w-96 bg-gray-800 rounded mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-4 bg-gray-800/50 p-6 rounded-lg">
              <div className="h-6 w-3/4 bg-gray-700 rounded" />
              <div className="h-4 w-full bg-gray-700 rounded" />
              <div className="h-4 w-5/6 bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
