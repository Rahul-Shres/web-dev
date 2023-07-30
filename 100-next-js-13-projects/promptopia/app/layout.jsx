import Nav from '@components/Nav';
import '@styles/global.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover the latest prompt"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        {/* looks like background */}
        <div className='main'>
            <div className='gradient'></div>
        </div>
        {/* looks like content */}
        <main className='app'>
            <Nav />
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
