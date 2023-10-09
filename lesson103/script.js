import {one as first, two} from './main';

console.log(`${one} and ${two}`);

console.log(first);




import * as data from './main';

console.log(`${data.one} and ${data.two}`);
data.sayHello();

////по умолчанию

import sayHello from './main';

