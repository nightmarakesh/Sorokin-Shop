import CategoryCard from "./CategoryCard.jsx";
import './Category.css'

const GridCategories = (props) => {
    const {categories  = [] } = props;
    return (
        <div className="categories-grid">
            {categories.map(({category,title}) => {
                const key = `${category}-${title}`
                return (
                    <CategoryCard
                        key = {key}
                        category={category}
                        title={title}
                    />
                );
            })}
        </div>
    )
}

export default GridCategories;