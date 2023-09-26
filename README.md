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
1. Prettier.config.cjs module is not defined
解決方法　→ https://chaika.hatenablog.com/entry/2020/04/13/130000

2. know how the useEffect works

The second argument of `useEffect` is an array of dependencies that specifies when the effect should run. It's an important aspect of using `useEffect` correctly in React components. You should use the second argument when you want to control the conditions under which the effect is executed. Here are some scenarios and guidelines for using the second argument:

1. **Effect Should Run Once (Component Mounting):**
   - If you want the effect to run only once when the component mounts (equivalent to `componentDidMount` in class components), pass an empty array (`[]`) as the second argument. This ensures that the effect runs only after the initial render.

   ```javascript
   useEffect(() => {
     // Code to run on component mount
   }, []);
   ```

2. **Effect Should Run Whenever Specific Dependencies Change:**
   - If you want the effect to run whenever specific variables or props change, include those variables or props in the second argument array. This is useful for responding to changes in data.

   ```javascript
   const [count, setCount] = useState(0);

   useEffect(() => {
     // Code to run whenever 'count' changes
     console.log(`Count changed to ${count}`);
   }, [count]);
   ```

3. **Effect Should Run After Every Render (Component Update):**
   - If you omit the second argument (or provide no array at all), the effect will run after every render, which is similar to `componentDidUpdate` in class components.

   ```javascript
   useEffect(() => {
     // Code to run after every render
   });
   ```

4. **Cleanup Function Should Run on Unmount:**
   - If your effect involves any cleanup (e.g., unsubscribing from a subscription, removing event listeners), you should include a cleanup function in the effect. To ensure the cleanup runs when the component unmounts, return the cleanup function within the effect. In this case, you can provide an empty dependency array to indicate that the effect has no dependencies.

   ```javascript
   useEffect(() => {
     // Code to run on component mount

     return () => {
       // Cleanup code to run on component unmount
     };
   }, []);
   ```

In summary, the second argument of `useEffect` is used to specify the conditions under which the effect should run. It's a powerful tool for managing side effects and ensuring that they occur at the appropriate times in the component's lifecycle. By providing the right dependencies or leaving the array empty, you can control when and how your effects execute.


3. know window.matchMedia means
```
if (window.matchMedia("(min-width: 400px)").matches) {
  /* ビューポートの幅が 400 ピクセル以上の場合のコードをここに */
} else {
  /* ビューポートの幅は 400 ピクセル未満の場合のコードをここに */
}

```

4. know how @media works

```javascript
/* Define a media query for screens with a maximum width of 600px */
@media (max-width: 600px) {
  /* CSS rules to apply when the screen width is 600px or less */
  body {
    font-size: 16px;
  }

  .container {
    width: 90%;
  }
}

/* Define a media query for screens with a minimum width of 601px */
@media (min-width: 601px) {
  /* CSS rules to apply when the screen width is 601px or more */
  body {
    font-size: 18px;
  }

  .container {
    width: 80%;
  }
}
```

5. know how to use framer-motion
>https://www.framer.com/motion/introduction/

6. Use this method to replace {' '} to <span> tag

```
  <HText>
  MILLIONS OF HAPPY MEMBERS GETTING{" "}
      <span className="text-primary-500">FIT</span>
  </HText>
```

7. install form library

```
npm i react-hook-form
```