# Pulsar: Pulsing button with modal window for Angular (v2+)

Pulsing button with modal window.

## Demo

Check out the live demo here: http://ngx-pulsar-demo.surge.sh

![Demo](https://media.giphy.com/media/l41JGqnZJSR9N3WRG/giphy.gif "Demo")


## Quick Start

```
npm install ngx-pulsar --save
```

### Angular Version

This library is built to work with **Angular 2.3.0+**, and support ahead-of-time compilation.

### Module Format

This library ships as a "flat ES module" (FESM). This means that all the JavaScript code is located in a single ES5-compatible file, but makes use of ES2015 `import` and `export` statements.

Webpack, Systemjs and Rollup all support this format and should work without problems.

A UMD bundle is also provided for systems which do not support FESM.

## Simple Example

```TypeScript
// app.module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxPulsarModule} from 'ngx-pulsar'; // <-- import the module
import {MyComponent} from './my.component';

@NgModule({
    imports: [
      BrowserModule,
      // This is demo url, replace it with your Slack Webhooks link.
      NgxPulsarModule.forRoot(),
      ], // <-- include it in your app module
    declarations: [MyComponent],
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```

```TypeScript
// my.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'my-component',
    template: `
    <p>
      Home works!!! <ngx-pulsar [size]='20' title='Show Pulsar Modal window'></ngx-pulsar>
    </p>
       
    `
})
export class MyComponent {}
```

## API

| Input | Default |
| --- | --- |
|  title | Modal window title |
|  text | Modal window text  |
|  size | Circle size in pixels, default: 18px  |


## Building from source

Requires globally-installed node (tested with v6.x) & npm. 

```
npm install
npm run build 
```
`test` runs the Karma tests once. You can also use `test:watch` to keep tests running in watch mode.

`npm run build` creates an intermediate `/dist` folder, but the final output of the lib (which gets published to npm) is in the `/dist` folder.

## License

MIT
