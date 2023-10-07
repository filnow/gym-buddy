
interface MenuLayoutProps {
    children: React.ReactNode;
}

export default function MenuLayout({ children }: MenuLayoutProps) {
    return (
        <div className="rounded-lg bg-slate-300 flex-1 mx-auto overflow-y-auto scrollbar-hide">
                <div className="flex flex-col items-center justify-center">
                    {children}
                </div>
        </div>
    );
}