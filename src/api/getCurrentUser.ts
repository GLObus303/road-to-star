export const getCurrentUser = (token: string) =>
  fetch("/api/me", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
