import { UserButton } from '@clerk/nextjs';
import { auth, currentUser } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();
  const user = currentUser();

  return (
    <main className='w-full absolute overflow-hidden bg-white h-full'>
      <header className='flex items-center justify-end py-4 px-4'>
      <UserButton afterSignOutUrl="/" />
      </header>
      <div className='flex items-center justify-center h-full'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold text-gray-900'>Clerk Demo</h1>
          <p className='text-gray-500'>A demo of Clerk in Next.js</p>
          <p className='text-gray-500'>User ID: {userId}</p>
        </div>
      </div>
    </main>
  )
}
