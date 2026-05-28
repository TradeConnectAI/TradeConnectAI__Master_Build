"use client";

export default function BarryLogoutButton() {
  async function logout() {
    await fetch("/api/barry-logout", {
      method: "POST",
    });

    window.location.href = "/barry-window-cleaners-login";
  }

  return (
    <button
      onClick={logout}
      className="rounded-full border border-red-300/20 bg-red-300/10 px-4 py-2 text-sm font-bold text-red-100 hover:bg-red-300/20"
    >
      Logout
    </button>
  );
}
