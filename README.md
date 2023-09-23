1. npm

```
    npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react
    npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node
```

2. make @ to this root path

vite.config.ts

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[{find:"@", replacement: path.resolve(__dirname,"src")}],
  }
})
```

tsconfig.json

```
{
  "compilerOptions": {
    "path":{
      "@/*":["./scr/*"]
    },
    ...,
  }
}
```

## SET UP TAILWIND CSS

3. install tailwind

4. add tailwind plugin to react

```
npm i -D prettier prettier-plugin-tailwindcss
```

## Problems
Prettier.config.cjs module is not defined
解決方法　→ https://chaika.hatenablog.com/entry/2020/04/13/130000