import Link from "next/link"

const AboutPage = ({params}) => {
    return (
      <div>
        <h1 className="text-4xl">Dynaimiccc Page</h1>
        <p className="py-10">{params.id}</p>
      <Link href={"/"}>Home</Link>
      </div>
    )
  }
  
  export default AboutPage
  