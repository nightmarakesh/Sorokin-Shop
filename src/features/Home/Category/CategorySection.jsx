import SectionHead from "../../Catalog/SectionHead.jsx";
import GridCategories from "./GridCategories.jsx";
import './Category.css'

const CategorySection = ()=> {
    const categories = [
        {category : 'men', title :'Для мужчин'},
        {category : 'women', title :'Для женщин'},
        {category : 'sport', title :'Для спорта'},
    ]
    return (
        <section className="categories-section">
            <SectionHead
                title = "Категории"
                label = "Выбери направление"
                href="/catalog"
                children="Смотреть все"
            />

            <GridCategories
                categories = {categories}
            />

        </section>
    )
}

export default CategorySection;