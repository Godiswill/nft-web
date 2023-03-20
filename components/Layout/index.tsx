import Header from '../common/Header';

export default function Layout({
    children,
    className,
    mainClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    mainClassName?: string;
}) {
    return (
        <div className={className}>
            <Header />
            <main
                className={`h-full lg:h-[calc(100%-56px)] overflow-y-auto ${mainClassName || ''}`}
            >
                {children}
            </main>
        </div>
    );
}
