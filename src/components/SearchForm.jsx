import Field from "./Field.jsx";
import Button from "./Button.jsx";

const SearchForm = ({searchQuery,setSearchQuery}) => {
    return (
        <form className="search-form">
            <Field
                className="search-form"
                id="search"
                type="search"
                value={searchQuery}
                onInput={(event) => setSearchQuery(event.target.value)}
                placeholder="Поиск..."
                label="Поиск по каталогу"
            />

            <Button
                className="search-form"
                type="search"
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
            </Button>
        </form>
    )
}
export default SearchForm;