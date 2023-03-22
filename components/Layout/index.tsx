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
            <main className={`${mainClassName || ''}`}>{children}</main>
        </div>
    );
}
