import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages";
import { ShoppingPage } from "../02-component-patterns/pages";

type JSXComponent = () => JSX.Element

interface Route {
    
        to: string,
        path: string,
        Component: LazyExoticComponent<JSXComponent> |  JSXComponent,
        name: string,
    
}

export const routesComponentsPatterns: Route[] = [
    {
        path: '/shopping',
        to: '/shopping',
        Component: ShoppingPage,
        name: 'Shopping',
    },
    
    
    
]