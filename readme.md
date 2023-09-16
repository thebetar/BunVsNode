# Conclusion

Bun claims a lot of great advantages some are already production ready some aren't. In this project I will try to proof or disproof these claims and see how useful they actually are.

## Typescript support

Bun claims to have typescript support and JSX support out of the box.
This seems to work and is really convenient since everytime typescript is used setting up the tsconfig file is a struggle. It's nice to not have to worry about this anymore.

## Faster http server

Bun claims to have a higher response per minute throughput than normal node.js and this really seems to hold up. See image in results folder for proof.

## Faster bundling

Bun claims to have very fast bundling even beating the current fastest option esbuild.
This is however when you use their own bundler which is still in beta. Since this is not production ready I have decided to not investigate this furter.

## Hot reloading

Bun claims to have faster hot reloading than the other well known option `nodemon`.
This is true and bun does this by analysing where the change has happened and only refreshing this part of the code without resetting the full process. This really helps when scaling up your application.

## File reading

In the file reading test something interesting happened. While node.js was consistently faster when reading small files, once files got bigger than 100kb, bun took over with a big speed improvement.

## Using ES modules and CommonJS modules in the same file

Bun claims to be able to resolve ES modules and commonjs modules in the same file. Which it can! This is great when using a dependency that somehow still uses common.js in a ES6+ project.
