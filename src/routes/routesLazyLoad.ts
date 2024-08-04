import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element

interface Route {
    
        to: string,
        path: string,
        Component: LazyExoticComponent<JSXComponent> |  JSXComponent,
        name: string,
    
}


const LazyLayout = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );

export const routesLazyLoad: Route[] = [
    {
        path: '/LazyLoad/*',
        to: '/LazyLoad/',
        Component: LazyLayout,
        name: 'Lazy-1',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },
    
]