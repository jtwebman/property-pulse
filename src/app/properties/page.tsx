import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PropertyPulse | Find Proepties',
};

export default function PropertiesPage() {
  return (
    <>
      <h1 className='text-3xl'>Properties</h1>
      <Link href='/'>Go Home</Link>
    </>
  );
}
