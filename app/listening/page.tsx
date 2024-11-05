import IeltsBook from '@/components/listening/IeltsBook';
import React from 'react';
import data from '../../public/data/ieltsListening.json' assert { type: 'json' };

export default function Home() {
    console.log(data)
    return (
        <div className="pt-[110px] flex justify-center">
            <div className="grid gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map((book, index) => (
                    <IeltsBook key={index} bookNo={book.name} />
                ))}
            </div>
        </div>
    );
}
