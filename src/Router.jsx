import {useEffect, useState} from "react";

export const useRoute = () => {
    const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
            const onLocationChange = () => {
                setPath(window.location.pathname)
            }
            window.addEventListener('popstate', onLocationChange)
            return () => {
                window.removeEventListener('popstate', onLocationChange)
            }
            },
        [])
    return path

}

const Router = (props) =>{
    const {routes, onAddToCart, cartCount} = props
    const path = useRoute()
    const Page = routes[path] ?? routes['*']
    return <Page cartCount={cartCount} onAddToCart={onAddToCart} />;
}

export default Router