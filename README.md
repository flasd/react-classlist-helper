# React classList Helper
Helper to defining multiple classes on a react component.

## Getting up and running

Install with a package manager of choice: 
```
    npm install react-classlist-helper --save-dev
    // Or
    yarn add react-classlist-helper --dev
```

## Usage
Import `classList` from `react-classlist-helper`. 
```javascript
import classList from 'react-classlist-helper';
...
const Component = (props) => (
    <div className={ classList(myCssClass1, myCssClass2, myCssClass3) } />
);

// <div class="myCssClass1 myCssClass2 myCssClass3"></div>
```
##### ClassMap

You can use it with a `ClassMap`. It's usefull for when you need to toggle a class based on a boolean condicion. A ClassMap has the following structure:
```javascript
type ClassMap = {
    className: boolean,
    ...
};
```
##### Usage:
```javascript
import classList from 'react-classlist-helper';
...
const ClassMap = {
    myAwesomeCssClass: true,
    myBadCssClass: false,
    myAwesomeCssClass2: true,
    myAwesomeCssClass3: true,
};
const Component = (props) => (
    <div className={ classList(ClassMap) } />
);

// <div class="myAwesomeCssClass myAwesomeCssClass2 myAwesomeCssClass3"></div>
```

It prevent classes with `key: false` from beeing rendered.

## MIT Licence
Copyright 2017 Marcel Coelho.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.