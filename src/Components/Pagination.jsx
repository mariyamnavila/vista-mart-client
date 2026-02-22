const Pagination = ({ page, totalPages, setPage }) => {
    const pages = [...Array(totalPages).keys()].map((n) => n + 1);

    // Show limited page range
    const getVisiblePages = () => {
        if (totalPages <= 7) return pages;
        if (page <= 4) return [...pages.slice(0, 5), "...", totalPages];
        if (page >= totalPages - 3) return [1, "...", ...pages.slice(totalPages - 5)];
        return [1, "...", page - 1, page, page + 1, "...", totalPages];
    };

    const visible = getVisiblePages();

    return (
        <div className="flex items-center justify-center gap-1.5 mt-10 mb-6">
            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
                ← Prev
            </button>

            {visible.map((p, i) =>
                p === "..." ? (
                    <span key={`ellipsis-${i}`} className="px-2 text-gray-400 select-none">…</span>
                ) : (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-10 h-10 text-sm font-semibold rounded-xl transition-all duration-200 ${page === p
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                                : "bg-white text-gray-600 border border-gray-200 hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600"
                            }`}
                    >
                        {p}
                    </button>
                )
            )}

            <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
                Next →
            </button>
        </div>
    );
};

export default Pagination;