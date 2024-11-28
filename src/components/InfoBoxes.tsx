import Link from 'next/link';
import InfoBox from './InfoBox';

export default function InfoBoxes() {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            heading={<h2 className='text-2xl font-bold'>For Renters</h2>}
            button={
              <Link
                href='/properties'
                className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
              >
                Browse Properties
              </Link>
            }
          >
            <p className='mt-2 mb-4'>Find your dream rental property. Bookmark properties and contact owners.</p>
          </InfoBox>
          <InfoBox
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            heading={<h2 className='text-2xl font-bold'>For Property Owners</h2>}
            button={
              <Link
                href='/properties/add'
                className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600'
              >
                Add Property
              </Link>
            }
          >
            <p className='mt-2 mb-4'>
              List your properties and reach potential tenants. Rent as an airbnb or long term.
            </p>
          </InfoBox>
        </div>
      </div>
    </section>
  );
}
