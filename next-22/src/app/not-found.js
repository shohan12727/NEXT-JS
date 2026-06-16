import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4">
      <div className="text-center max-w-md w-full space-y-6">
        {/* Big visual 404 indicator */}
        <h1 className="text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 animate-pulse">
          404
        </h1>
        
        {/* The King Shohan Heading */}
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Not Found, <Link href="https://admin.tryhackme.com" target="_blank" className="text-amber-400 hover:underline">
            <span className="text-amber-400">King Shohan</span>
            </Link> 👑
          </h2>
          <p className="text-gray-400 text-lg">
            The royal treasury couldn't find the resource you requested.
          </p>
        </div>

        {/* Decorative divider line */}
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>

        {/* Action Button */}
        <div>
          <Link 
            href="/" 
            className="inline-block px-8 py-3 text-sm font-medium text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-full shadow-lg hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}