import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('middleware');
    // request.headers.delete('cookie')
    // request.headers.delete('cookie')
    const token = request.headers.get('cookie');
    const test = request.headers.append('cookie', "")
    console.log('token', token, test);
    if (!token) {
        const url = request.nextUrl.clone()
        url.pathname = '/user/login'
        return NextResponse.rewrite(url)

    }

    return NextResponse.next();
}
