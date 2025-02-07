import { Link } from "@inertiajs/react";
import React from "react";

const isNews = (news, isDashboard, editUrl, editData, test) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card bg-base-100 w-full lg:w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        {isDashboard ? (
                            <>
                                <Link
                                    href={route("edit.news", { id: data.id })}
                                    data={editData}
                                    as="button"
                                    method="get"
                                    className="badge badge-outline"
                                >
                                    Edit
                                </Link>

                                <Link
                                    method="post"
                                    href={route("delete.news", { id: data.id })}
                                    className="badge badge-neutral"
                                >
                                    Delete
                                </Link>
                            </>
                        ) : (
                            <>
                                <div className="badge badge-outline">
                                    {data.author}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <div className="">No news to show</div>;
};

const NewsCard = ({ news, isDashboard = false, editUrl, editData, test }) => {
    if (!Array.isArray(news) || news.length === 0) {
        return noNews();
    }
    return isNews(news, isDashboard, editUrl, editData, test);
};

export default NewsCard;
