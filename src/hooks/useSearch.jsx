import { useState } from "react";

export const useSearch = (products) => {
    const [searchQuery, setSearchQuery] = useState("");

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filteredProducts = clearSearchQuery.length > 0
        ? products.filter((product) => {
            const searchText = `${product.brand} ${product.model}`;
            return searchText.toLowerCase().includes(clearSearchQuery);
        })
        : null;

    return { searchQuery, setSearchQuery, filteredProducts };
}