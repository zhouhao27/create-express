# Create Express

A cli to create a very simple Node server with Express and TypeScript

## Installation

```
npm i -g @zhouhao27@create-express
```

## Usage

```
  create-express <project-name> [options]
    
  options:
  -h, --help Help
  -v, --version Show version
```

## Steps to create an Node server with Express and TypeScript

1. Add .gitignore
2. README.md
3. Create project

```
yarn init -y
```

4. Add modules and add types
   
```
yarn add express 
```

**`ts-node-dev`** is similar to nodemon but it's working for TypeScript.

```
yarn add -D typescript @types/express ts-node-dev tsc
```

5. Create tsconfig.json
6. Add scripts in package.json

```
"scripts": {
  "ts-node-dev --respawn --transpileOnly ./src/server.ts"
}
```

## References

[TypeScript Express tutorial](https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/)

[How (and why) you should use Typescript with Node and Express.](https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d)