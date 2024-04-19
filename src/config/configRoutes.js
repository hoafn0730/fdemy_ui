const routes = {
    home: '/',
    search: '/search',
    detail: '/courses/:slug',
    watch: '/watch',
    roadMap: '/road-map',
    roadMapDetail: '/road-map/:slug',
    blog: '/blogs',
    blogDetail: '/blogs/:slug',
    profile: '/:username',
    post: {
        path: '/me/posts',
        drafts: 'drafts',
        published: 'published',
    },
    newPost: '/new-post',
    setting: {
        path: '/settings',
        personal: 'personal',
        security: 'security',
    },

    message: '/messages',
    bookmark: '/bookmarks',
    notFound: '/not-found',
};

export default routes;
