'use server'

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
    let message = error.message
    switch (message) {
      case "Invalid login credentials":
        message = "Email atau password salah"        
        break;
      default:
        message = "Terjadi kesalahan yang tidak diketahui"
        break;
    }
    return { success: false, message: message }
  }

  return { success: true, message: 'Login berhasil!' }
}

export async function register(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
    image: formData.get('image') as string | null,
  }

  const { data: authData, error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  if (authData?.user) {
    const userData = {
      id: authData.user.id,
      name: data.name,
      image: data.image || '',
    }

    try {
      await db.insert(users).values(userData)
    } catch (dbError) {
      return { success: false, message: 'Gagal registrasi' }
    }
  }
  if(!authData) {
    return { success: false, message: 'Gagal melakukan registrasi' }
  }

  return { success: true, message: 'Registrasi berhasil!' }
}
