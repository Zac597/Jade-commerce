import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar(){
  return(
  <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
    <Link href="/" className="uppercase font-bold text-md h-12 flex items-center">
    Next Store
    </Link>
    <div className="flex items-center gap-8">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="border rounded-md border-gray-400 px3 py-2">
            Sign Up
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  </nav>
  )
}