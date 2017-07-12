# Normalize argv  

Useful while needs to use command arguments in electron or nwjs app.

Inspired by [RoyalBingBong] comment in this [issue]

## Installation

```shell
npm install normalize-argv --save
```

## Usage

When you starts develop build by ```elecrtron . your-argument```

```js
var argv = require('normalize-argv')();
/*
 * it is not necessary to assign to var
 * because it modify original process.arg variable
 */

console.log(process.argv);

var program = require('commander');   
/* remember to add 'normalize-argv' before argv parsers, 
 * because some of them tries to extract name of app from second arv
 * and as you know second argv is '.' for electron
 * 
 * better way is to use constructor for Commander for example:
 */

var Command = require('commander').Command;
var program = new Command('your-app-name');

```

Sometimes you need to start app by ```electron ./build your-argument```

```js
var argv = require('normalize-argv')('./build');
```

## Licensing

MIT

[RoyalBingBong]: https://github.com/RoyalBingBong
[issue]: https://github.com/tj/commander.js/issues/512#issuecomment-313176733
