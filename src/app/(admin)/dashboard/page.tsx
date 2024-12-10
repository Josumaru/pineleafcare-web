import { NextPage } from 'next'

interface Props {}
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

const Page: NextPage<Props> = async ({}) => {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
      redirect('/login')
    }
  redirect('/dashboard/blog')
}

export default Page