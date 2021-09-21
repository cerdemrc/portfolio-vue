export const routes = [
    {
        path: "/",
        name:"About",
        component: () => 
            import(/* webpackChunkName: "about" */ "../pages/About")
    },
    {
        path: "/portfolio",
        name:"Portfolio",
        component: () => 
            import(/* webpackChunkName: "portfolio" */ "../pages/Portfolio")
    },
    {
        path: "/skills",
        name:"Skills",
        component: () => 
            import(/* webpackChunkName: "skills" */ "../pages/Skills")
    },
    {
        path: "/blog",
        name:"Blog",
        component: () => 
            import(/* webpackChunkName: "blog" */ "../pages/Blog")
    }
]