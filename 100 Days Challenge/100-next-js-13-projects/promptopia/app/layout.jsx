import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover the latest prompt"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Provider>

        {/* looks like background */}
        <div className='main'>
            <div className='gradient'></div>
        </div>
        {/* looks like content */}
        <main className='app'>
            <Nav />
            {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
// We use the Provider component in layout.js in Next.js
//  to provide access to global state and data to all of 
//  the child components. This means that any component that
//   is rendered inside of the Provider component will be able 
//   to access the same data, without having to pass it around manually.