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
                className={mainClassName}
                style={{ height: 'calc(100vh - 71px)', overflowY: 'auto' }}
            >
                {children}
            </main>
        </div>
    );
}
