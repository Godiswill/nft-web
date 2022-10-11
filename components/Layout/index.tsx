import Header from '../common/Header';

export default function Layout({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={className}>
            <Header />
            <main className={className} style={{ height: 'calc(100vh - 71px)', overflowY: 'auto' }}>
                {children}
            </main>
        </div>
    );
}
