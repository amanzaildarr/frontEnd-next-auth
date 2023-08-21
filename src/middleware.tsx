export { default } from "next-auth/middleware"

// Configuration object for the middleware
export const config = {
    // Specify the paths to which the middleware should be applied
    // The middleware will be applied to paths that match the provided patterns
    matcher: ["/admin", "/user"]
}