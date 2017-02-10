// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

export default function createRoutes(store) {
    // Create reusable async injectors using getAsyncInjectors factory
    const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

    return [
    {
        path: '/',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/public/Home'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    }, 
    {
        path: '/login',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/public/Login'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '/register',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/public/Register'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    }, 
    {
        path: '/locator',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/private/BusLocator'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '/documents',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/private/SchoolDocuments'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '/upload',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/private/UploadDocument'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '/messages',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/private/Messages'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '/new',
        getComponent(nextState, cb) {
            const importModules = Promise.all([
                import('containers/private/NewMessage'),
            ]);

            const renderRoute = loadModule(cb);

            importModules.then(([component]) => {
                renderRoute(component);
            });

            importModules.catch(errorLoading);
        },
    },
    {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
            import('containers/public/NotFound')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
    }];
}
