import type { GetToken } from '@/hooks/useClerkAuth'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function setGraphQLHeaders(getToken: GetToken) {
  const token = await getToken()
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}
