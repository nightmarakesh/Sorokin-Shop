const SearchForm = () => {
    return (
        <form className="search-form">
            <label
                className="search-form__label"
                htmlFor="search"
            >
                Поиск по каталогу:
            </label>

            <input
                className="search-form__input"
                id="search"
                name="search"
                type="search"
                placeholder="Поиск..."
            />

            <button
                className="search-form__button"
                type="submit"
                aria-label="Найти"
            >
                <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="currentColor"
                >
                    <circle cx="11" cy="11" r="6" />
                    <path d="m16 16 5 5" />
                </svg>
            </button>
        </form>
    )
}
export default SearchForm;