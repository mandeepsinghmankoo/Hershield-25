import React from 'react'
import { Link } from 'react-router-dom'
import Features from './Features'
import Map from './Map'

function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden ">
        


        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-12 lg:flex-row lg:px-8">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-flex rounded-fullpx-4 py-2 text-7xl font-bold text-[#f0bd6a] backdrop-blur">
              Women Safety Analytics
            </p>
            <h2 className="text-4xl font-bold leading-tight ">
              Safer streets start with smarter insights.
            </h2>
            <p className="mt-6 text-lg text-slate-200 sm:text-xl">
              Leverage real-time threat detection, incident insights, and rapid response tools to help keep communities safer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/login" className="rounded-xl bg-[#f0bd6a] px-6 py-3 font-semibold text-slate-950 transition hover:bg-[#ffd08f]">
                LOG IN
              </Link>
              <Link to="/signup" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20">
                SIGN UP
              </Link>
            </div>
          </div>
          <div>
              <img src="heropic.png" alt="" />
          </div>
        </div>
      </section>



      <section className="relative min-h-[90vh] overflow-hidden w-full  " >
        <Features className="w-full" />
      </section>
     
     
     
      <section className="relative min-h-[90vh] overflow-hidden w-[80%] p-10 " >
        <Map className="w-full h-full" flex items-center justify-center />
      </section>
    </>
  )
}

export default Home