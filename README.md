# This is a [Next.js](https://nextjs.org/) project.

You can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
After doing these steps.

## Getting started
Go to project root folder.

### NPM
For this project we are using npm, so make sure to run with that.
If you are using Volta it will automatically use the correct version of node and npm.
If you don't have Volta [you can find it here](https://docs.volta.sh/guide/getting-started).
I would advice using this instead of NVM.
If you insist on using NVM you can find the node and npm versions in the package.json file under Volta or Engines.

### Eslint and Prettier
For this project we are using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality.

If you are able to commit when you have ESLint errors please do the following, as if any eslint errors gets committed it forces someone else to fix it
- Make sure you have ESLint installed in your editor so you can see the error
- Make sure you have Git for windows installed on your machine, if you do not, you have to download and install it and do the following:
- Go into to the project folder, show hidden folder, go to the .git folder, delete the hooks folder
- Run npm rebuild to recreate dependencies to make sure husky works

### Openapi generator
We are using [openapi generator](https://github.com/OpenAPITools/openapi-generator) to create types from the middleware.
Openapi have a Java dependency so make sure you have the latest installed. You can [find it here](https://www.java.com/download/ie_manual.jsp).

Make sure to run the following to get generated types.
- `cd root-folder`
- `npm run codegen:<codegen-option>`

### In your terminal run the following to get started
> Run `npm install` in your terminal under the project folder.
>
> Run `npm run dev` to start developing.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

### React

To learn more about react, [try this tutorial](https://beta.reactjs.org/) or [React docs](https://reactjs.org/docs/hooks-intro.html)

### SWR

To help with data fetching we are using SWR. To learn more, you can find the [SWR documentation and getting started](https://swr.vercel.app/docs/getting-started)

### Jotai

For state management we are using Jotai. To learn more you can find their [documentation here](https://jotai.org/docs/introduction)

### React Hook Form

To handle forms we are using React Hook Form. To learn more [look here](https://react-hook-form.com/get-started)

### Framer Motion

For animations we are using Framer motion. [Read docs here](https://www.framer.com/docs/introduction/)

### GraphQL

We are using GraphQL to fetch some of the data - e.g. Content Stack. Find documentation about [GraphQL here](https://graphql.org/learn/)

### Openapi generator
We are using openapi generator to generate types. [Read docs here](https://github.com/OpenAPITools/openapi-generator)

### Notes on LF vs CRLF

We're using CRLF line endings, so if you're on a unix system you need to make sure that is handled correctly. If you're using VSCode you may want to put this in your settings file to make sure new files get the correct line endings:

```json
{
  "files.eol": "\r\n"
}
```
