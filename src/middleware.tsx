import { NextResponse } from 'next/server'
import { instagram, whatsapp } from './components/link_packs'

export function middleware(request:any) {
    if (process.env.NODE_ENV === 'production') {
        const prod_domain = 'bungasofa.id'
        const sub = request.nextUrl.hostname.replace(prod_domain, '')
        if (sub === 'wa.') {
            return NextResponse.redirect(new URL(whatsapp, request.url))
        } else if (sub === 'instagram.') {
            return NextResponse.redirect(new URL(instagram, request.url))
        }
    }
}