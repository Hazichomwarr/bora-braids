"use client";
import { CalendarDays, House, MessageCircleMore, ShoppingBag, UserRound, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navigationItems: { href: string; label: string; icon: LucideIcon }[] = [{ href: "/", label: "Discover", icon: House }, { href: "/community", label: "Community", icon: MessageCircleMore }, { href: "/book", label: "Book", icon: CalendarDays }, { href: "/shop", label: "Shop", icon: ShoppingBag }, { href: "/my-bora", label: "My Bora", icon: UserRound }];
export function BottomNavigation() { const pathname = usePathname(); return <nav className="bottom-navigation" aria-label="Primary navigation">{navigationItems.map(({ href, label, icon: Icon }) => { const isActive = pathname === href; return <Link key={href} href={href} className={`navigation-item${isActive ? " navigation-item-active" : ""}`} aria-current={isActive ? "page" : undefined}><Icon aria-hidden="true" strokeWidth={isActive ? 2.3 : 1.8} /><span>{label}</span></Link>; })}</nav>; }
