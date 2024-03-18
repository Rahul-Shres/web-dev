import Hero from "./pages/Hero";

export default function App() {
  return (
    <>
    <div className="relative">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70"></div>
      <div className="absolute bottom-0 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70"></div>
    <h1 className="text-3xl font-bold underline">
      <Hero />
    </h1>
    </div>
    </>
  )
}