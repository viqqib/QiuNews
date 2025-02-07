import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsCard from "@/Components/Homapage/NewsCard";
import Paginator from "@/Components/Homapage/Paginator";

export default function Homepage(props) {
    // console.log('props: ', props);
    return (
        <>
            <div className="min-h-screen bg-slate-100">
                <Navbar user={props.auth.user}/>
                <Head title={props.title} />

                <div className="flex justify-center flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:items-stretch p-4">
                    <NewsCard news={props.news.data}/>
                </div>

                <div className="flex justify-center items-center p-4">
                    <Paginator meta={props.news.meta}/>
                </div>
            </div>
        </>
    );
}
