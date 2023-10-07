import Animation from "../Animation";
interface MenuLayoutProps {
    children: React.ReactNode;
}


export default function MainLayout({ children }: MenuLayoutProps) {
    return (
        <div className="relative h-screen p-2 gap-3 flex items-stretch">
            {children}
            <Animation/>
        </div>
    );
}