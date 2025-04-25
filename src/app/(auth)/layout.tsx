"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode;
}

/**
 * Layout wrapper for authentication pages (login, register, etc.)
 * Provides a consistent layout for all auth-related pages
 */
const AuthLayout = ({ children }: AuthLayoutProps) => {
    const pathname = usePathname();
    const isSignIn = pathname === "/sign-in";

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav
                    className="flex justify-between items-center"
                    aria-label="Authentication Navigation"
                >
                    <Image
                        src="/logo.svg"
                        height={56}
                        width={152}
                        alt="Logo"
                        priority
                        style={{ height: "auto", width: "auto" }}
                    />
                    <Button asChild variant="secondary">
                        <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
                            {isSignIn ? "Sign Up" : "Login"}
                        </Link>
                    </Button>
                </nav>
                <div className="flex flex-col justify-center items-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;