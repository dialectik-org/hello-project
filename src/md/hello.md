---
title: MD First Example
css : style.css
---
<div style={{ marginLeft: '20px' }} class="col-6">

# Hello Dialectik world!

By default, every markdown file (`.md` extension) in `src/md` is compiled as a *standalone* resource.

An example of Katex equation:

$$ f(a,b,c) = (a^2+b^2+c^2)^3 $$

This an admonition test:

:::info

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::


This is a test:
* **first** bold option
* second option

This is an ~external~ [link](https://archetype-lang.org)

## Code

This is code:

```ts {4-5} showLineNumbers
const MyApp = ''

type toto = {
  age : number,
  name : string
}

export function toto() : string {
  return "toto"
}
let x : number = 3
const y : number = 3+x
if (x > y) {
  console.log(y)
}
```

This is some archetype code:
```archetype showLineNumbers
archetype exec_cond_demo(admin : address, value : nat)

entry set_value (v : nat) {
  called by admin
  require {
    r1: transferred > value otherwise "INSUFFICIENT_TRANSFERRED_AMOUNT";
    r2: now < 2023-01-01    otherwise "TOO_LATE";
  }
  effect { value := v; }
}
```

## This is another title

And a [link](#hello-dialectik-world) to top.

Let's try a table:

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

<h1>this is an html tag</h1>

And some text.

## Admonitions

It is possible to specify a title:
```md
:::note This is a title

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::
```


:::note This is a title

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::


:::tip

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::

:::caution

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::

:::danger

Some **content** with _Markdown_ `syntax`. This is some info with [markdown](https://fr.wikipedia.org/wiki/Markdown) inside.

:::

## Images

This is an online image:

![ChatGPT](https://chatgpt-info.fr/wp-content/uploads/2023/01/ChatGPT-300x300.png)

This is a local image:

![edukera logo](./assets/icon_300_blue.png)

</div>
