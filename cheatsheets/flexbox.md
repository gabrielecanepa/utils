# Flexbox

The [**CSS3 Flexible Box**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), or flexbox, is a layout mode intended to accommodate different screen sizes and different display devices.

## Main properties

### Container

```css
.container {
  display: flex | inline-flex;
  flex-direction: row | row-reverse | column | column-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around;
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

![](https://cdn-images-1.medium.com/max/2000/1*L2W-ziqU45a1BNWV79ijDQ.gif)

![](https://cdn-images-1.medium.com/max/2000/1*4yKnG2-vuPF5XA-BmXADLQ.gif)

![](https://cdn-images-1.medium.com/max/2000/1*2-6Tw8jqWrMKOfIugKyuDA.gif)

![](https://cdn-images-1.medium.com/max/2000/1*htfdNmRIIFu_veRaFOj5qA.gif)

### Item

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

#### align-self

![](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg)

## Other properties

### Container

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
  flex-flow: <flex-direction> <flex-wrap>;
}
```

#### flex-wrap
![](https://css-tricks.com/wp-content/uploads/2014/05/flex-wrap.svg)

### Item

```css
.item {
  flex-grow: <number>; /* default 0 */
  flex-shrink: <number>; /* default 1 */
  flex-basis: <length> | auto; /* default auto */
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

#### flex-grow

![](https://css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)

## References

* [How Flexbox works](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35)
* [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
