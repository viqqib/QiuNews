import { Link } from "@inertiajs/react";
import React, { useState } from "react";

function Paginator({ meta }) {
    console.log("pagee", meta);
    // const prev = meta.links[0].url;
    // const prevLabel = meta.links[0].label;
    // const next = meta.links[meta.links.length - 1].url;
    // const current = meta.current_page;

    const prev = meta.links.find((link) => link.label === "Previous");
    const next = meta.links.find((link) => link.label === "Next");

    const current = meta.current_page;

    // Generate page numbers dynamically
    const pages = meta.links
        .filter((link) => !isNaN(link.label)) // Filter out non-numeric labels (e.g., "Previous", "Next")
        .map((link) => ({
            url: link.url,
            label: link.label,
            active: link.active,
        }));

    return (
        <div className="join">
            {/* Previous Button */}
            {prev && (
                <Link href={prev.url} className="join-item btn">
                    {prev.label}
                </Link>
            )}

            {/* Page Numbers */}
            {pages.map((page, index) => (
                <Link
                    key={index}
                    href={page.url}
                    className={`join-item btn ${
                        page.active ? "btn-active" : ""
                    }`}
                >
                    {page.label}
                </Link>
            ))}

            {/* Next Button */}
            {next && (
                <Link href={next.url} className="join-item btn">
                    {next.label}
                </Link>
            )}
        </div>
    );
}

export default Paginator;
