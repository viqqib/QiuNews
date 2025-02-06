import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsCard from "@/Components/Homapage/NewsCard";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <div className="min-h-screen bg-slate-100">
                <Navbar />
                <Head title={props.title} />

                <div className="p-5">
                    <NewsCard news={props.news}/>
                    {/* {props.news ? props.news.map((data, i) => {

                return(
                    <div key={i} className='bg-white p-3 mb-2 rounded-sm shadow-sm'>
                        <p className='text-xl'>{data.title}</p>
                        <p>{data.description}</p>
                        <p className='text-xs'>{data.category}</p>
                        <p className='font-bold text-xs'>{data.author}</p>
                    </div>
                )

                }) : "No News Available" } */}
                </div>
            </div>
        </>
    );
}
