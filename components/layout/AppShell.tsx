import type { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";
export function AppShell({ children }: { children: ReactNode }) { return <div className="site-shell"><div className="app-shell"><header className="app-header"><span className="brand-mark" aria-hidden="true">B</span><span className="brand-name">Bora</span></header><main className="app-content">{children}</main><BottomNavigation /></div></div>; }
