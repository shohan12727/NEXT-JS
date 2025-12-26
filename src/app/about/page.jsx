import Title from '@/Components/Title';
import Link from 'next/link';
import React from 'react';

const about = () => {
    return (
        <div>
            <Title>Welcome to about</Title>
            <div className="space-x-5">
                <Link href="/about/contact">Contact</Link>
                <Link href="/about/teams">Teams</Link>
            </div>
        </div>
    );
};

export default about;