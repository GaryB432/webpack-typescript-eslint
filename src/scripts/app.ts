import '../styles/app.scss';

import { Greeter } from './greeter';

const greeter: Greeter = new Greeter('webpack-typescript-eslint');

greeter.start(document.getElementById('app')!);
