# [Tr package](#)
###  **Tr**ansition component

> Sorry, I released this component many days ago, but forgot to share docs,
You can see there are many options here to pass to `Tr Component`

#### Introduction

This component is made to reduce the boilerplate code for making a transition animation with waapi ( web animation api ).

#### Overview

<section class="grid lg:grid-cols-2 grid-cols-1 place-content-center">

```js
---
...
const {  clx, sty, uid, toId, show,
  enter, enterFrom, enterTo,
  leave, leaveFrom, leaveTo, 
  event, enterEvent, leaveEvent ,
  easing, hiddenFlag=false
} = Astro.props;
...
---
```

<div class="">

Every Option is there to serve its purpose, Let take a **quick overview**,

clx->Stands for classes that you want to apply before apply animation

sty->Stands for styles that you want to apply before apply animation

Scroll To see others

</div>
</section>

Now, Let's see what does this 

-> **uid(unique ID)** serve nothing it's just there to make each animation unique, 

-> **toId(just ID)** of Element from which you want to trigger animation, 

-> **event** | **enterEvent** | **leaveEvent** takes *DOM Event* which you want to assign to Element whose Id match with *`toId`*, to play the animation on uid element to play , Now if you want to somethings effect like hover then,`enterEvent` and `leaveEvent` are usefull, 

-> **hiddenFlag** If you want to add a hidden class to your element, then if you are using it well you just have it, but if not you can define it in your **css like**, 

```css
.hidden{
  display:hidden;
}
```

-> **show** It's only for me Now, I use this to tell the component to run which animation to run, when there are many animation to play while entering of element and leaving of a element

#### Okay, Now there is something to see, different Initially I built this component to make it work with tailwindcss and make something to convert your tailwindcss class `p-4`, into padding: "16px",

<hr/>

-> **enter** | **leave** Here, define the duration of the element like `duration-100`, unlike tailwindcss you can pass any value to duration like `duration-2000` or `duration-4000` ANY, Similarly define your delay, Yet these two properties that you can pass

-> **enterFrom** | **enterTo** | **leaveFrom** | **leaveTo** takes properties and their values, but in this manner 

```
... enterFrom="property-value1" enterTo="property-value2" ...
```

Now, I pass these values to ***web animation*** to animate and, My work is Done you will get awesome animation from **value1** to **value2**.

::: warning
I am very sorry, but you can't animate properties like shadow, for now, I will implement it, just in two or three days,
:::


, Yeah you should know as of now you can play animation with only `enterFrom` & `enterTo` But if you want to use full potensial, without any confusions then you can use like this,


```html
<button id="Z">Click</button>
<Tr clx="opacity-0" sty="" uid="R" toId="Z"
  enterEvent="mouseenter" leaveEvent="mouseleave"
  hiddenFlag={true} enter="duration-1000" leave="duration-100"
  enterFrom="opacity-0" enterTo="opacity-100" 
  leaveFrom="opacity-100" leaveTo="opacity-0"
  easing="ease-in"
>Hello World</Tr>
```

Or, to play this same animation using simple click event pass just,


```html
<button id="Z">Click</button>
<Tr clx="opacity-0" sty="" uid="R" toId="Z"
  event="mouseenter"
  hiddenFlag={true} enter="duration-1000"
  enterFrom="opacity-0" enterTo="opacity-100">
  Hello WOrld
</Tr>
```

Or you want to see more animation examples made with this `Tr-Component` then, [Check out ](https://divyamrit.netlify.app/blogs/transition/)

For Now to use this [component](/docs/sourceCode) simply copy paste it into your components directory, And use it, The file might seems very big but Since Astro will built it on server based on the condition you will get just pure javascript, at your website, 

### Simply Docs for shortHand class name for properties,

-> ***x is number***

-> `p-x` stands for 'padding:(x*4)px '

-> `m-x` stands for 'margin:(x*4)px'

-> `h-x` stands for 'height:(x*4)'

-> `w-x` stands for 'width:(x*4)'

-> `bg-color-shade` stands for 'backgroundColor: hexValue', yet it supports all color values from [tailwindcss COLOR PALETTE](https://tailwindcss.com/docs/customizing-colors#color-palette-reference)

-> `opacity-x` stands for 'width:(x*100)'

-> To animate `color` of text then U can use color-#FFF simply

-> To animate any property which have single property you can do the same type `property-value`

-> To animate `max-height` you can write `maxHeight-10px`

#### Future

Future seems pretty beautiful as of now, in ***next weeks*** I would like to give features like animating 

-> boxShadows, textShadows, 

-> Giving lots of custom animation 

Future seems pretty beautiful as of now, in next month I would like to give features like animating 

-> scroll linked animation 

Hope that You will 💖💖 this component, And make it better by each day.

<script client>
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
function animateHeaders() {
  let headers = document.querySelectorAll('p');
  for (let i = 0; i < headers.length; i++) {
    headers[i].animate([
        {transform: 'translateX(-10px)',
         opacity: 0},
        {transform: 'none',
         opacity: 1}], {
        duration: 10000,
        fill: 'both',
        timeline: new ScrollTimeline({
            scrollOffsets: [{target: headers[i], edge: 'end', rootMargin: '-20px', clamp: true},
                            {target: headers[i], edge: 'end', threshold: 1, rootMargin: '-20px', clamp: true}],
            fill: 'both',
        })
    });
  }
}
animateHeaders()
</script>