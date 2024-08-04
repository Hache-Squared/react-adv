import { lazy, LazyExoticComponent } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    
        to: string,
        path: string,
        Component: LazyExoticComponent<JSXComponent> |  JSXComponent,
        name: string,
    
}

const Lazy1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1') );
const Lazy2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2') );
const Lazy3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3') );

export const routes: Route[] = [
    {
        to: '/LazyPage1',
        path: 'LazyPage1',
        Component: Lazy1,
        name: 'Lazy-1',
    },
    {
        to: '/LazyPage2',
        path: 'LazyPage2',
        Component: Lazy2,
        name: 'Lazy-2',
    },
    {
        to: '/LazyPage3',
        path: 'LazyPage3',
        Component: Lazy3,
        name: 'Lazy-3',
    },
]