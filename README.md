# vite-inconsistency-repro

This was created based on a vanilla vite project. I installed lodash and copy pasted the following lines in main.js:

```
import flow from 'lodash/flow';
import split from 'lodash/fp/split';

export const confNumbers = flow(split(/[;,\s]+/))('e');
```

Running `yarn build` multiple times gives different outputs:

```
$ yarn build
yarn run v1.22.19
$ vite build
vite v4.0.3 building for production...
✓ 433 modules transformed.
dist/index.html                       0.45 kB
dist/assets/javascript-8dac5379.svg   1.00 kB
dist/assets/index-d0964974.css        1.22 kB │ gzip:  0.64 kB
dist/assets/index-1939915d.js        48.70 kB │ gzip: 19.47 kB
✨  Done in 1.38s.
$ yarn build
yarn run v1.22.19
$ vite build
vite v4.0.3 building for production...
✓ 435 modules transformed.
dist/index.html                       0.45 kB
dist/assets/javascript-8dac5379.svg   1.00 kB
dist/assets/index-d0964974.css        1.22 kB │ gzip:  0.64 kB
dist/assets/index-2df03ccf.js        48.59 kB │ gzip: 19.44 kB
✨  Done in 1.37s.
$
```
