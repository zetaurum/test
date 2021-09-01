import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'

import SignIn from 'components/SignIn'
import useAuthentication from 'hooks/useAuthentication'

const HomePage: NextPage = () => {
  const router = useRouter()
  const { isAuthenticated } = useAuthentication()

  if(isAuthenticated) router.replace('/tasks')
  
  return <SignIn/>
};

export default HomePage;
