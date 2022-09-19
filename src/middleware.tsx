import { NextResponse } from 'next/server'
import { instagram, whatsapp } from './components/link_packs'

export function middleware(request:any) {
    // Wildcard Domain Manager by Middleware
    if (process.env.NODE_ENV === 'production') {
        const prod_domain = 'bungasofa.id'

        const sub = request.nextUrl.hostname.replace(prod_domain, '')
        if (sub === 'wa.') {
            return NextResponse.redirect(new URL(whatsapp, request.url))
        } else if (sub === 'instagram.') {
            return NextResponse.redirect(new URL(instagram, request.url))
        }

        if (request.nextUrl.hostname != prod_domain) {
            return NextResponse.redirect(new URL('https://'+prod_domain, request.url))
        }
    }
}