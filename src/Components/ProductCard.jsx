const ProductCard = ({ product }) => {
    return (
        <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-indigo-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-50 h-52">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-600 px-2.5 py-1 rounded-full border border-indigo-100">
                    {product.category}
                </span>
            </div>

            {/* Body */}
            <div className="p-4 space-y-2">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">{product.brand}</p>
                <h4 className="font-bold text-gray-900 text-base leading-tight line-clamp-1">{product.name}</h4>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{product.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-2xl font-black text-indigo-600">${product.price}</span>
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full">
                        <span className="text-amber-400 text-sm">★</span>
                        <span className="text-sm font-semibold text-amber-700">{product.ratings}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;