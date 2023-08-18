import Header from '../common/Header';
import Footer from '../common/Footer';
import Universe from '../common/Universe';

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
            <Universe />
            <Header />
            <main className={`${mainClassName || ''}`}>{children}</main>
            <Footer />
        </div>
    );
}
