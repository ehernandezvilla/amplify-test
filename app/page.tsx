export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      <main className="flex flex-col gap-6 row-start-2 items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">🚀 Test Page</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          Esta es una página de prueba desplegada en AWS Amplify.
        </p>
        <div className="flex gap-4 mt-4 flex-col sm:flex-row">
          <a
            className="rounded-full border border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            href="https://aws.amazon.com/amplify/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver AWS Amplify
          </a>
          <a
            className="rounded-full border border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-5"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en GitHub
          </a>
        </div>
      </main>

      <footer className="row-start-3 text-sm text-gray-400 dark:text-gray-500">
        Proyecto base para pruebas con AWS Amplify y Next.js
      </footer>
    </div>
  );
}
