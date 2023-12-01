import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MainLayout.module.css'
import {useAppSelector} from "../hooks";

const MainLayout = () => {
    const {theme} = useAppSelector(state => state.theme)

    return (
        <div className={css.wrap}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};