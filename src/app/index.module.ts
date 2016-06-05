/// <reference path="../../build/typings/tsd.d.ts" />

import { routerConfig } from './index.route';
import { config } from './index.config';
import { runBlock } from './index.run';
import autoload from './autoload';

const app = angular.module('colmena', [
    'ngMaterial',
    'ui.router',
    'ngMessages',   // required by login and register
    // 'toastr',
    'rsJsonapi',
    'angular-jwt',
    'angular-storage',
    // 'ui.select',
    'pascalprecht.translate',
    'angular-momentjs',
    'duScroll',
    'ngProgress',
    'ui.calendar',
    'firebase',
    'angular-toArrayFilter',
    'ui-notification',
    'md.data.table',
    'ngFileUpload'
])
.config(routerConfig)
.config(config)
.run(runBlock);

autoload(app);
