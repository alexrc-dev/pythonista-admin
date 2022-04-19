export function saveToken(token: string) {
  localStorage.setItem("token", token)
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("token")
  }
  return null;
}

