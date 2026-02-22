import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `http://localhost:3000/products?page=${page}&limit=9&search=${search}&sort=${sort}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
                );
                setProducts(res.data.products);
                setTotalPages(res.data.totalPages);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [page, search, sort, brand, category, minPrice, maxPrice]);

    const hasActiveFilters = brand || category || minPrice || maxPrice;

    const clearFilters = () => {
        setBrand("");
        setCategory("");
        setMinPrice("");
        setMaxPrice("");
        setPage(1);
    };

    const selectClass =
        "w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all appearance-none cursor-pointer hover:border-indigo-300";

    const inputClass =
        "w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all hover:border-indigo-300";

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50/30 to-purple-50/20">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30 backdrop-blur-sm bg-white/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
                            Vista Mart<span className="text-indigo-600">.</span>
                        </h1>
                    </div>

                    {/* Search bar */}
                    <div className="relative flex-1 max-w-xl">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base">🔍</span>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent focus:bg-white transition-all"
                        />
                    </div>

                    {/* Sort */}
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer appearance-none pr-8 hover:border-indigo-300 transition-all"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center' }}
                    >
                        <option value="">Sort by</option>
                        <option value="priceLow">Price: Low → High</option>
                        <option value="priceHigh">Price: High → Low</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex gap-8">
                    {/* Sidebar Filters */}
                    <aside className="hidden lg:block w-56 shrink-0">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sticky top-24 space-y-5">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-widest">Filters</h3>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-xs text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Brand</label>
                                <select value={brand} onChange={(e) => { setBrand(e.target.value); setPage(1); }} className={selectClass}
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: '2rem' }}>
                                    <option value="">All Brands</option>
                                    {["Apple", "Samsung", "Dell", "HP", "Asus", "Sony", "Lenovo", "Xiaomi"].map(b => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Category</label>
                                <select value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }} className={selectClass}
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: '2rem' }}>
                                    <option value="">All Categories</option>
                                    {["Mobile", "Laptop", "Audio", "Camera", "Wearable", "Accessories"].map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Price Range</label>
                                <input
                                    type="number"
                                    placeholder="Min $"
                                    value={minPrice}
                                    onChange={(e) => { setMinPrice(e.target.value); setPage(1); }}
                                    className={inputClass}
                                />
                                <input
                                    type="number"
                                    placeholder="Max $"
                                    value={maxPrice}
                                    onChange={(e) => { setMaxPrice(e.target.value); setPage(1); }}
                                    className={inputClass}
                                />
                            </div>

                            {/* Active filter tags */}
                            {hasActiveFilters && (
                                <div className="pt-2 border-t border-gray-100 space-y-2">
                                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {brand && <Tag label={brand} onRemove={() => setBrand("")} />}
                                        {category && <Tag label={category} onRemove={() => setCategory("")} />}
                                        {minPrice && <Tag label={`≥$${minPrice}`} onRemove={() => setMinPrice("")} />}
                                        {maxPrice && <Tag label={`≤$${maxPrice}`} onRemove={() => setMaxPrice("")} />}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {/* Results count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-gray-500">
                                Showing <span className="font-semibold text-gray-900">{products.length}</span> products
                                {search && <> for "<span className="text-indigo-600 font-semibold">{search}</span>"</>}
                            </p>
                        </div>

                        {/* Loading state */}
                        {loading ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
                                        <div className="h-52 bg-gray-100" />
                                        <div className="p-4 space-y-3">
                                            <div className="h-3 bg-gray-100 rounded-full w-1/3" />
                                            <div className="h-4 bg-gray-100 rounded-full w-2/3" />
                                            <div className="h-3 bg-gray-100 rounded-full w-full" />
                                            <div className="h-3 bg-gray-100 rounded-full w-4/5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-24 text-center">
                                <span className="text-6xl mb-4">🔍</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search term</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                                {products.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))}
                            </div>
                        )}

                        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                    </main>
                </div>
            </div>
        </div>
    );
};

// Small reusable tag component for active filters
const Tag = ({ label, onRemove }) => (
    <span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full border border-indigo-100">
        {label}
        <button onClick={onRemove} className="text-indigo-400 hover:text-indigo-700 leading-none font-bold">×</button>
    </span>
);

export default Home;