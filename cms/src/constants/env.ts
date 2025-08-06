export const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
if (!VITE_BACKEND_URL) {
    throw new Error("Add your VITE_BACKEND_URL to the .env file");
}

export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
}
