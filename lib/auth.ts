// lib/auth.ts
export async function fetchUserProfile() {
    const res = await fetch("http://localhost/crime_api/profile", {
      credentials: "include",
    });
  
    if (!res.ok) {
      throw new Error("Not authenticated"); // 👈 This must happen
    }
  
    const user = await res.json();
    return user;
  }
  