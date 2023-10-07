

interface NavbarLayoutProps {
    children: React.ReactNode;
}

export default function NavbarLayout({ children }: NavbarLayoutProps) {
    return (
        <div className="w-[350px] flex-col hidden lg:flex overflow-y-auto">
                <div className="flex flex-col flex-1 gap-2">
                    {children}
                </div>
        </div>
    );
}