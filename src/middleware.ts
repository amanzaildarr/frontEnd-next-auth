import { NextResponse } from "next/server";

export function middleware(request: Request){
    console.log('middlware');
    console.log('requset',request.method);
    console.log('requset:ur;:::',request.url);
    return NextResponse.next()
}
// export const config = {
//     matcher:['/user/sigin']
// }