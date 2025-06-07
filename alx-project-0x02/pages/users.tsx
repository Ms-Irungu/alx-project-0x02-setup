import React from 'react'
import UserCard from '@/components/common/UserCard'
import { type UserProps } from '@/interfaces'
import Header from '@/components/layout/Header'

const UsersPage:React.FC<{users: UserProps[]}> = ({users}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='sm:px-4 md:px-6 mt-3'>
        <div>
          <h1 className='font-bold text-lg'>Users Content</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-4 md:px-6 mt-3'>
          {
          users?.map(({name, email, address }: UserProps, key:number) => (
            <UserCard
              key={key}
              name={name}
              email={email}
              address={address}
            />
          ))
          }

        </div>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default UsersPage;