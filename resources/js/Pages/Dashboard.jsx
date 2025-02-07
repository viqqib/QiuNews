import NewsCard from "@/Components/Homapage/NewsCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { useState, useEffect } from "react";


export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        router.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            router.get("/news");
        }

        console.log("newss:", props); // This is unnecessary and causes slow behavior
    }, []);

    // console.log(props);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 ">
                            {isNotif && (
                                <>
                                    <div role="alert" className="alert">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="stroke-info h-6 w-6 shrink-0"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </>
                            )}

                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full m-2"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full m-2"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                value={description}
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                className="input input-bordered w-full m-2"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                value={category}
                            />

                            <button
                                className="m-2 btn btn-primary"
                                onClick={() => handleSubmit()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center flex-col items-center gap-4 lg:flex-row lg:flex-wrap lg:items-stretch p-4">
                        {/* {props.myNews && props.myNews?.length > 0 ? (
                            props.myNews.map((news, i) => (
                                <div key={i}>
                                    <Link href={route('edit.news', { id: news.id })}>
                                        <p>{news.title}</p>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div>Tidak adaa berita</div>
                        )} */}

                        <NewsCard
                            news={props.myNews}
                            isDashboard="true"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
