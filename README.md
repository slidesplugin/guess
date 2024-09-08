## 如何被reveal.js調用

```js
import GuessPlugin from "guess.mjs"

Reveal.initialize({
  plugins: [
    GuessPlugin.init()
    // GuessPlugin.init(5, 1) // 如果想要調整blur的程度與step，可以這樣調整
  ]
})
```

## 原理

利用css的filter功能來達到模糊的效果

```css
.demo {
  filter: blur(5px)
}
```

## Usage:

```html
<div data-guess>Hello World</div>
<div data-guess style="--val:20">Hello World</div>
<div data-guess style="--val:20;--step:3">Hello World</div>
```
