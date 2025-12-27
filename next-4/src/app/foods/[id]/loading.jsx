export default function loading() {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="rounded-2xl shadow-lg overflow-hidden border">
        {/* Image Skeleton */}
        <div className="w-full h-80 bg-gray-300" />

        <div className="p-6 space-y-4">
          {/* Title */}
          <div className="h-7 w-2/3 bg-gray-300 rounded" />

          {/* Category & Area */}
          <div className="flex gap-4">
            <div className="h-4 w-32 bg-gray-300 rounded" />
            <div className="h-4 w-24 bg-gray-300 rounded" />
          </div>

          {/* Price */}
          <div className="h-6 w-32 bg-gray-300 rounded" />

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <div className="h-9 w-28 bg-gray-300 rounded-md" />
            <div className="h-9 w-32 bg-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
