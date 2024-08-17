
import A from './A'

export default function Example() {
  return (
    <div className="relative bg-gray-900 overflow-hidden px-4">
      <div className="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
        <svg
          className="absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-cyan-900 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
          width={364}
          height={384}
          viewBox="0 0 364 384"
          fill="none"
        >
          <defs>
            <pattern
              id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} fill="currentColor" />
            </pattern>
          </defs>
          <rect width={364} height={384} fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
        </svg>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Chromatic Tuner</span>{' '}
                    <span className="text-cyan-400 md:block">for iOS</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    A unique tuner without distractions.
                    <br /><span class="text-cyan-400">No ads, notifications, or rating requests</span>.
                  </p>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">

                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10"></p>
                  <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center mx-auto px-1">
                        <A href="https://apps.apple.com/us/app/one-click-tuner/id1448329781" className="app-store-button">
                          {/* <img
                            className="w-32px align-middle pb-2"
                            src="images/5stars.svg"
                            alt="five stars"
                          /> */}
                          <img
                            className="w-64"
                            src="images/appstorebadge.svg"
                            alt="buy on the app store"
                          />
                          {/* <img
                            className="w-32px align-middle pt-2"
                            src="images/5stars.svg"
                            alt="five stars"
                          /> */}
                        </A>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 justify-center ">
                <img src="images/hero.gif" alt="iphone app" className="rounded-[40px] w-64 m-auto" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
