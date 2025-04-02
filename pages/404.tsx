// pages/404.tsx
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const Custom404: FC = () => {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="robots" content="noindex" />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
                <h1 className="text-4xl font-bold mb-4 text-yellowApp">404 - Page Not Found</h1>
                <p className="text-lg mb-6 text-yellowApp">Oops! The page you are looking for doesn't exist.</p>
                <Link 
                    href="/" 
                    className="px-6 py-3 bg-yellowApp text-black font-medium rounded-md hover:bg-white transition-colors duration-200 shadow-md"
                >
                    Go back to the homepage
                </Link>
            </div>
        </>
    );
};

export default Custom404;