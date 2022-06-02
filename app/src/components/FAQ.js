import A from './A'

const Q = ({question, answer}) => (
  <div key={question}>
    <dt className="text-lg leading-6 font-medium text-gray-900">{question}</dt>
    <dd className="mt-2 text-base text-gray-500">{answer}</dd>
  </div>
)


const faqs = [
  Q({
    question: 'What makes One Click Tuner unique?',
    answer: (
      <div>
        <p>The two most common methods of tuner visualization are a needle or a scrolling line, both of which represent the distance in <A href="https://en.wikipedia.org/wiki/Cent_(music)">cents</A> between the note being played and your target note.</p>
        <img src="images/otherviz.gif" alt="other tuners" className="w-96 mx-auto" />
        <p>
          Non-digital instruments create sound with enough frequency variability that tuners need to "smooth" the frequency so that the needle/line doesn't jump around too much.  One Click Tuner is unique in that it displays the entire distribution of frequencies.
        </p>
      </div>
    )
  }),
  Q({
    question: 'What instruments can One Click Tuner tune?',
    answer: (
      <div>
        <p>Just about any of them!  Most of our users are guitar players, but One Click Tuner also works for basses, banjos, mandolins, etc.</p>
      </div>
    )
  }),
  Q({
    question: 'Are there ads?',
    answer: 'Nope!'
  }),
  Q({
    question: 'Do you collect any personal information from me?',
    answer: "Absolutely not."
  }),
]

export default function Example() {
  return (
    <div className="bg-white px-8">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Can’t find the answer you’re looking for? You can contact us in the form below.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
