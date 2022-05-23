import A from './A'

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    quote: 'If you’re a minimalist, and you want the most stripped down and effective tuner app available, this is it.',
    attribution: 'The Guitar Journal',
    href: "https://www.theguitarjournal.com/one-click-tuner-minimalist-guitar-tuner-app-frequency-display/",
    imgsrc: "images/guitarjournal.jpg",
    imgalt: "guitar journal logo"
  },
  {
    quote: "I'd like to take the opportunity to again express my appreciation for the One Click app. Its simple answer to a common real-world request is uncommonly elegant amongst the noisy offerings of the current digital climate. Well done.",
    attribution: "Email from user",
    imgsrc: "images/user.svg",
    imgalt: "User logo",
    imgclass: "invert"
  },
  {
    quote: "It costs a less than most cups of coffee, and the clean, intuitive, no-nonsense, ad-free experience makes it immediately apparent that it was money well-spent.",
    attribution: "ProductHunt user",
    href: "https://producthunt.com/posts/one-click-tuner",
    imgsrc: "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153658&amp;theme=light",
    imgalt: "Product Hunt Badge",
    imgclass: ""
  }
]

//-----------------------------------------------------------------------------// QuoteSVG
const QuoteSVG = () => (<svg
  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-600"
  fill="currentColor"
  viewBox="0 0 32 32"
>
  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
</svg>)

export default function Example() {
  return (
    <div className="bg-gray-900 px-8">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <QuoteSVG />
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Reviews</h2>
            <p className="text-xl text-gray-300">
              Here's what people have said about One Click Tuner:
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.quote} className="py-10 px-6 bg-gray-800 rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  {person.href ?
                  <A href={person.href}><img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imgsrc} alt={person.imgalt} /></A> :
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imgsrc} alt={person.imgalt} />
                  }
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                      <div className="relative text-lg font-medium text-white md:flex-grow">
                        <QuoteSVG />
                        <p className="relative text-align-center">
                          {person.quote}
                        </p>
                      </div>
                    </blockquote>
                      <p className="text-indigo-400 text-center pt-2">{person.attribution}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}




// //-----------------------------------------------------------------------------// Review
// const Review = ({img, quote, attribution}) => (
//   <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border md:border-gray-900 lg:pr-16">
//     <div className="md:flex-shrink-0">
//       {img}
//     </div>
//     <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
//       <div className="relative text-lg font-medium text-white md:flex-grow">
//         <QuoteSVG />
//         <p className="relative text-align-center">
//           {quote}
//         </p>
//       </div>
//     </blockquote>
//     <footer className="mt-8">
//       <div className="flex items-start">
//         <div className="ml-4">
//           <div className="text-base font-medium text-gray-200">{attribution}</div>
//         </div>
//       </div>
//     </footer>
//   </div>
// )

// //-----------------------------------------------------------------------------// Reviews
// export default function Reviews() {
//   return (
//     <section className="bg-gray-800 px-16">
//       <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
//         <Review
//           img={(
//             <A href="https://www.theguitarjournal.com/one-click-tuner-minimalist-guitar-tuner-app-frequency-display/">
//               <img className="h-24 w-24 rounded-full mx-auto" src="images/guitarjournal.jpg" alt="guitar journal logo" />
//             </A>
//           )}
//           quote = "If you’re a minimalist, and you want the most stripped down and effective tuner app available, this is it."
//         />

//         <Review
//           img={(
//             <A href="https://producthunt.com/posts/one-click-tuner">
//               <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153658&amp;theme=light" alt="One Click Tuner - Innovative Musical Instrument Tuner for iOS | Product Hunt Embed" className="h-16 mx-auto" />
//             </A>
//           )}
//           quote=
//           attribution="ProductHunt user"
//         />
//       </div>


//       <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
//         <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-gray-900 lg:pr-16">
//           <div className="md:flex-shrink-0">
//             <A href="https://www.theguitarjournal.com/one-click-tuner-minimalist-guitar-tuner-app-frequency-display/">
//               <img className="h-24 w-24 rounded-full mx-auto" src="images/guitarjournal.jpg" alt="guitar journal logo" />
//             </A>
//           </div>
//           <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
//             <div className="relative text-lg font-medium text-white md:flex-grow">
//               <QuoteSVG />
//               <p className="relative">
//                 I'd like to take the opportunity to again express my appreciation for the One Click app. Its simple answer to a common real-world request is uncommonly elegant amongst the noisy offerings of the current digital climate. Well done.
//               </p>
//             </div>
//           </blockquote>
//         </div>

//         <div className="py-12 px-4 border-t-2 border-gray-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
//           <div className="md:flex-shrink-0">
//             <A href="https://producthunt.com/posts/one-click-tuner">
//               <img src="images/user.png" alt="user logo" className="h-16 mx-auto invert" />
//             </A>
//           </div>
//           <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
//             <div className="relative text-lg font-medium text-white md:flex-grow">
//               <QuoteSVG />
//               <p className="relative">
//               I'd like to take the opportunity to again express my appreciation for the One Click app. Its simple answer to a common real-world request is uncommonly elegant amongst the noisy offerings of the current digital climate. Well done.
//               </p>
//             </div>
//           </blockquote>
//           <footer className="mt-8">
//               <div className="flex items-start">
//                 {/* <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
//                   <img
//                     className="h-12 w-12 rounded-full"
//                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     alt=""
//                   />
//                 </div> */}
//                 <div className="ml-4">
//                   {/* <div className="text-base font-medium text-white">Joel Sutton</div> */}
//                   <div className="text-base font-medium text-gray-200">Product Hunt Review</div>
//                 </div>
//               </div>
//             </footer>
//         </div>
//       </div>
//     </section>
//   )
// }
