import NewsCard from "@/Components/Homapage/NewsCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title || '');
    const [description, setDescription] = useState(props.myNews.description || '');
    const [category, setCategory] = useState(props.myNews.category || '');



    const handleSubmit = () => {
        const data = {
            id : props.myNews.id,
            title,
            description,
            category,
        };
        router.post("/news/update", data);

        setTitle("");
        setDescription("");
        setCategory("");
    };

    console.log("edit:", props);

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
                    <div className="card bg-base-100 w-full lg:w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <input
                                type="text"
                                className="card-title"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                    defaultValue={props.myNews.title}
                            ></input>
                            <input
                                type="text"
                                className="text-sm card-title"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                    defaultValue={props.myNews.description}
                            ></input>

                            <div className="card-actions justify-end">
                                <input
                                    type="text"
                                    className="badge badge-outline"
                                    defaultValue={props.myNews.category}
                                    onChange={(category) =>
                                        setCategory(category.target.value)
                                    }
                                ></input>
                            </div>
                        </div>
                        <button
                            className="m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
