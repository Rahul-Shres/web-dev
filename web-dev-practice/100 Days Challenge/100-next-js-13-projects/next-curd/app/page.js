import Link from "next/link"
const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
      <p className="py-10">sdfs sd fsd fsdf sdfsdfsdfs sdfsdfsdfsdfsdfsdgdfgd sdfsdfdf sdfsdf sdfsd fsd fs dfd </p>
      <Link href={"/about"}>About</Link>
    </div>
  )
}

export default HomePage
