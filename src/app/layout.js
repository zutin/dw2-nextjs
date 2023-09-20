import './globals.css'
import Header from  '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Footer from '@/components/layout/Footer'

export const metadata = {
  title: 'NextJS - Desenvolvimento Web II',
  description: 'Whatever happens, happens.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <div className='flex'>
            <Sidebar />
            <div className='w-full'>
              {children}
            </div>
          </div>
        <Footer />
      </body>
    </html>
  )
}
