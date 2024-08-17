import A from './A'
import { Link } from 'react-router-dom'

const navigation = {
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/OneClickTuner/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Apple',
      href: 'https://apps.apple.com/us/app/one-click-tuner/id1448329781',
      icon: (props) => (
        <svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="currentColor"
          width="814px" height="1000px" viewBox="0 0 814 1000" enable-background="new 0 0 814 1000" xmlSpace="preserve" {...props} >
          <path d="M788.1,340.9c-5.8,4.5-108.2,62.2-108.2,190.5c0,148.4,130.3,200.9,134.2,202.2c-0.6,3.2-20.7,71.9-68.7,141.9
            c-42.8,61.6-87.5,123.1-155.5,123.1s-85.5-39.5-164-39.5c-76.5,0-103.7,40.8-165.9,40.8s-105.6-57-155.5-127
            C46.7,790.7,0,663,0,541.8c0-194.4,126.4-297.5,250.8-297.5c66.1,0,121.2,43.4,162.7,43.4c39.5,0,101.1-46,176.3-46
            C618.3,241.7,720.7,244.3,788.1,340.9z M554.1,159.4c31.1-36.9,53.1-88.1,53.1-139.3c0-7.1-0.6-14.3-1.9-20.1
            c-50.6,1.9-110.8,33.7-147.1,75.8c-28.5,32.4-55.1,83.6-55.1,135.5c0,7.8,1.3,15.6,1.9,18.1c3.2,0.6,8.4,1.3,13.6,1.3
            C464,230.7,521.1,200.3,554.1,159.4z"/>
        </svg>
      )
    }
  ],
}

export default function Example() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <A href='https://heyjoshday.com' className="text-base text-gray-500 hover:text-gray-300">
                About Us
              </A>
            </div>
            <div className="px-5 py-2">
              <Link to='/privacy' className="text-base text-gray-500 hover:text-gray-300">
                Privacy
              </Link>
            </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <A key={item.name} href={item.href} className="text-gray-500 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-8 w-8" aria-hidden="true" />
            </A>
          ))}
        </div>
        {/* <p className="mt-8 text-center text-base text-gray-700">&copy; 2022 Joshua Day. All rights reserved.</p> */}
      </div>
    </footer>
  )
}
