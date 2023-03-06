import { client } from '@app/_apollo'
import { MeDocument, MeQuery } from '@generated'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const { data, error, errors, loading } = await client.query<MeQuery>({
      query: MeDocument,
      context: {
        headers: {
          authorization: 'bearer ' + request.cookies.get('access-token')?.value,
        },
      },
    })

    if (!loading && (!data.me?.id || error || errors?.length)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/about/:path*', '/dashboard'],
}
