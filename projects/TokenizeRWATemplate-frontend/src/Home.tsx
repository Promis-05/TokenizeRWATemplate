import { useWallet } from '@txnlab/use-wallet-react'
import { Link } from 'react-router-dom'

/**
 * Home Page
 * Landing page for Virtue Assets – institutional RWA tokenisation platform
 */
export default function Home() {
  const { activeAddress } = useWallet()

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-full border border-slate-200 dark:border-slate-700">
            Virtue Assets
          </div>

          <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Trusted infrastructure for
            <br />
            real‑world asset tokenisation
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Launch compliant Algorand Standard Assets (ASA) for real estate, commodities,
            or private equity. Built for founders, operators, and institutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tokenize"
              className={`px-8 py-3 rounded-lg font-semibold transition text-white shadow-md ${
                activeAddress ? 'bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600' : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              Start Tokenising
            </Link>

            <a
              className="px-8 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded-lg font-semibold hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
              target="_blank"
              rel="noreferrer"
              href="https://dev.algorand.co/concepts/assets/overview/"
            >
              Learn about tokenisation
            </a>
          </div>

          {!activeAddress && (
            <p className="mt-6 text-slate-500 dark:text-slate-400">Connect your wallet using the button in the top‑right to start.</p>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">End‑to‑end workflow</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              A clean, verifiable path from asset creation to secondary market.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Ready for TestNet pilots
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Step 1 */}
          <div
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-black/30 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold"
              >
                1
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Connect wallet</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Use Pera, Defly, or any Algorand wallet. One click to authenticate.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-slate-100 dark:bg-slate-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Institutional‑grade wallets</span>
              <span className="group-hover:text-slate-800 dark:group-hover:text-slate-200 transition">Supported</span>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-black/30 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold"
              >
                2
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Define asset</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Name, supply, metadata – set manager, freeze, and clawback roles.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-slate-100 dark:bg-slate-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Compliance parameters</span>
              <span className="group-hover:text-slate-800 dark:group-hover:text-slate-200 transition">Configurable</span>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-black/30 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold"
              >
                3
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Mint & manage</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Create your ASA on Algorand TestNet. All transactions are final and auditable.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-slate-100 dark:bg-slate-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>On‑chain proof</span>
              <span className="group-hover:text-slate-800 dark:group-hover:text-slate-200 transition">Instant</span>
            </div>
          </div>

          {/* Step 4 */}
          <div
            className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 backdrop-blur
                          p-6 hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-black/30 transition"
          >
            <div className="flex items-start gap-4">
              <div
                className="shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-xl
                              bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 font-bold"
              >
                4
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Transfer & track</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Move assets, view holdings, and maintain a local history of your tokens.
                </p>
              </div>
            </div>

            <div className="mt-4 h-px bg-slate-100 dark:bg-slate-800" />

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Full transparency</span>
              <span className="group-hover:text-slate-800 dark:group-hover:text-slate-200 transition">Built‑in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Enterprise‑grade controls</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-slate-800 dark:text-slate-200 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Manager Role:</strong> Update asset settings after creation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-800 dark:text-slate-200 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Freeze Account:</strong> Restrict transfers when needed
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-800 dark:text-slate-200 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Clawback Authority:</strong> Recover tokens in exceptional cases
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-800 dark:text-slate-200 font-bold text-xl">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Metadata Support:</strong> Link off‑chain documentation and legal records
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8">
            <div className="bg-white dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600 p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-mono">Asset configuration example</p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Name:</span>{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">Virtue Real Estate Fund</span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Symbol:</span>{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">VREF</span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Total Supply:</span>{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">1,000,000</span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Decimals:</span>{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">2</span>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Manager:</span>{' '}
                  <span className="font-semibold text-gray-900 dark:text-white">Institution wallet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-800 dark:bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to tokenise your assets?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join founders and institutions building on Algorand. Start with a pilot on TestNet.
          </p>
          <Link
            to="/tokenize"
            className={`inline-block px-8 py-3 rounded-lg font-semibold transition ${
              activeAddress
                ? 'bg-white text-slate-800 dark:bg-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 shadow-md'
                : 'bg-slate-600 text-slate-300 cursor-not-allowed'
            }`}
          >
            Create Your First Asset
          </Link>
        </div>
      </div>
    </div>
  )
}