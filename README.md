# React classList Helper
Helper to defining multiple classes on a react component.

[![Build Status](https://travis-ci.org/flasd/react-classlist-helper.svg?branch=master)](https://travis-ci.org/flasd/react-classlist-helper) [![Coverage Status](https://coveralls.io/repos/github/flasd/react-classlist-helper/badge.svg?branch=master)](https://coveralls.io/github/flasd/react-classlist-helper?branch=master) [![npm version](https://badge.fury.io/js/react-classlist-helper.svg)](https://www.npmjs.com/package/react-classlist-helper)

## Getting it up and running

Add the latest version of react-classlist-helper to your package.json:
```
npm install react-classlist-helper --save
```
Also available in Yarn:
```
yarn add react-classlist-helper
```

## API

### classList(class1: (string || array || object), class2, ...classN): string
Used to add multiple classes to an element:

```javascript
import classList from 'react-classlist-helper';

...

const Component = () => (
    <div className={ classList(myCssClass1, myCssClass2, myCssClass3) } />
);

// <div class="myCssClass1 myCssClass2 myCssClass3"></div>
```

It also works with Arrays `['className', 'className2', ...]` and Objects `{ ClassName: boolean, ... }`;

The Object form is usefull for creating conditional classes:

```javascript
const mobileClass = 'myAwesomeMobileClass';
const desktopClass = 'myDesktopClass';
const isMobile = true;

const classMap = {
    myAwesomeMobileClass: isMobile,
    myDesktopClass: !isMobile,
};
// { myAwesomeMobileClass: true, myDesktopClass: false }

...

const Component = () => (
    <div className={ classList(classMap) } />
);

// <div class="myAwesomeMobileClass"></div>

```

### toggleClass(className: string, condition: boolean): string

If you have only one class to toggle based on a condition:
```javascript
import { toggleClass } from 'react-classlist-helper';

...

const isACOn = true;
const coolClass = 'cool';

const Component = () => (
    <div className={ toggleClass(coolClass, isACOn) } />
);
// <div class="cool"></div>

isACOn = false;
// <div class=""></div>

```

### classList (cL) and toggleClass (tC) aliases
Wanna save some space? Use the alias:
```javascript
import { cL, tC } from 'react-classlist-helper';

...

const myCond = true;
const myClass = 'dangerZone';

const someClasses = ['something', 'something'];

const Component = () => (
    <div className={ cl(someClasses, tC(myClass, myCond)) } />
);

// <div class="something something dangerZone"></div>
```

Happy coding!

## MIT Licence
Copyright 2017 Marcel Coelho.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
