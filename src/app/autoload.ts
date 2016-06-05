/**
requires webpack.d.ts and webpack-env.d.ts
@link: https://www.joshmanders.com/autoloading-angular-with-webpack/
**/

const req = require.context('./', true, /\.(controller|factory|directive|filter|service)\.(ts|js)$/);

const camelize = (str) => {
    return str.replace(/(-|\.)([a-z])/g, l => l[1].toUpperCase());
};
const titleize = (str) => {
    const camel = camelize(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
};
const getValues = (str) => {
    const arr = str.match(/([^\/]*)\.([^\.]*)\.([^\.]*)$/);

    const mapping = mappings[arr[2]];
    arr[1] = mapping.transform(arr[1]);
    // arr[1] = titleize(camelize(arr[1])) + titleize(arr[2])
    arr[1] = arr[1] + titleize(arr[2]);

    if (arr[2] === 'factory')
        arr[2] = 'service';
    return [
        arr[1],
        arr[2],
        arr[3]
    ];
};

export const mappings = {
    service: {
        fn: 'service',
        // transform: (name) => titleize(name)
        transform: (name) => name
    },
    controller: {
        fn: 'controller',
        // transform: (name) => titleize(camelize(name))
        transform: (name) => titleize(camelize(name))
    },
    directive: {
        fn: 'directive',
        transform: (name) => camelize(name)
    },
    filter: {
        fn: 'filter',
        transform: (name) => name
    },
    factory: {
        fn: 'service',
        transform: (name) => camelize(name)
    },
    provider: {
        fn: 'provider',
        transform: (name) => titleize(name)
    },
    config: {
        fn: 'config',
        transform: (name) => titleize(name)
    },
    run: {
        fn: 'run',
        transform: (name) => titleize(name)
    }
};

export const types = Object.keys(mappings);

export const inits = ['run', 'config'];

export default (app) => {
    req.keys().forEach((file) => {
        // const [null, type] = getValues(file)[1];
        const type = getValues(file)[1];
        const src = req(file);
        app[type](src);
    });
};
