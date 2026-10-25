export type CurrentUser = { name: string; image?: string | null } | null;

export function useCurrentUser() {
  const user: CurrentUser = null;
  const signOut = async () => {
  };
  return { user, signOut };
}
