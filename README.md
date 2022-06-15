# NHS-Numbers

Please note that this is in very early stages.

Looking to document this out more in the near future and provide expanded functionality.

Current basic usage is as follows.

```js
import { NHSNumber } from 'nhs-validation'

const nhsNumber = NHSNumber.generate();

console.log('Is valid? ', NHSNumber.validate(nhsNumber) ); // true
console.log('Is valid? ', NHSNumber.validate('671 668 9966') ); // true
console.log('Is valid? ', NHSNumber.validate('000 000 0001') ); // false
```
