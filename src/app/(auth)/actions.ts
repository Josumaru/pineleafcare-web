'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { db } from '@/db/db'
import { users } from '@/db/schema'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(`/error?message=${encodeURIComponent(error.message)}`)
  }


  revalidatePath('/', 'layout')
  redirect('/')
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string, // Pastikan ada input nama di form
    image: formData.get('image') as string | null, // Optional
  }

  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (error) {
    redirect(`/error?message=${encodeURIComponent(error.message)}`)
  }


  if (authData?.user) {
    const userData = {
      id: authData?.user.id,
      name: data.name,
      image: data.image || '',
    }

    try {
      await db.insert(users).values(userData)
    } catch (dbError) {
      console.error('Error inserting into users table:', dbError)
    }
  }

  revalidatePath('/login', 'layout')
  redirect('/login')
}