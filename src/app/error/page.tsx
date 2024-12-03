'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const ErrorPage = () => {
  const searchParams = useSearchParams()
  const errorMessage = searchParams.get('message') || 'Terjadi kesalahan. Silakan coba lagi.'

  return (
    <div className="flex items-center justify-center h-screen bg-[#18181B] text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops! 😢</h1>
        <p className="mt-2 text-lg">{errorMessage}</p>
        <Link href="/">
          <Button className="mt-5 bg-white text-black hover:bg-gray-200">
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
