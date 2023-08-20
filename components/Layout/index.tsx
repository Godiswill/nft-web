// import dynamic from 'next/dynamic';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Universe from '../common/Universe';

// const Universe = dynamic(() => import('../common/Universe'), { ssr: false });

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
