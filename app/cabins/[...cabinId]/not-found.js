import Link from "next/link";

function NotFound() {
  return (
    <main className='text-center space-y-6 mt-4'>
      <h1 className='text-3xl font-semibold text-amber-500'>
        This cabin could not be found :(
      </h1>
      <Link
        href='/cabins'
        className='inline-block bg-yellow-500 text-gray-100 px-6 py-3 text-lg'
      >
        Back to cabins
      </Link>
    </main>
  );
}

export default NotFound;
