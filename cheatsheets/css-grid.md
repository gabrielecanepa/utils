# CSS Grid Cheatsheet

[**CSS Grid Layout**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) introduces a two-dimensional grid system to CSS: grids can be used to lay out major page areas or small user interface elements.

## Syntax

### Main properties

```css
.container {
  display: grid | inline-grid; /* Also subgrid is avaiable */
  grid-template-rows: <line-name> <row_size> .. | repeat(<integer>, <rows-size> <lines-name>);
  grid-template-columns: <line-name> <column-size> .. | repeat(<integer>, <columns-size> <lines-name>);
  grid-template: <grid-template-rows> / <grid-template-columns>;
}

.item {
  grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>;
}
```

### Other properties

```css
.container {
  grid-template-areas: "<area-name> | . | none"
                       "..";

  grid-row-gap: <lines-size>;
  grid-column-gap: <lines-size>;
  grid-gap: <grid-column-gap> <grid-row-gap>;

  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: start | end | center | stretch | space-around | space-between;
  align-content: start | end | center | stretch | space-around | space-between;

  grid-auto-rows: <rows-size>;
  grid-auto-columns: <columns-size>;
  grid-auto-flow: row | column | row dense | column dense; /* default is row */

  grid: none | <grid-template-rows> / <grid-template-columns> | <grid-auto-flow> [<grid-auto-rows> [/ <grid-auto-columns>]];
}

.item {
  grid-row-start: <integer> | span <integer> | <name> | span <name> | auto;
  grid-row-end: <integer> | span <integer> | <name> | span <name> | auto;
  grid-column-start: <integer> | span <integer> | <name> | span <name> | auto;
  grid-column-end: <integer> | span <integer> | <name> | span <name> | auto;
  grid-row: <grid-row-start> / <grid-row-end>;
  grid-column: <grid-column-start> / <grid-column-end>;

  order: <integer>; /* default is 0 */

  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

## References

* [A complete guide to CSS grid](http://chris.house/blog/a-complete-guide-css-grid-layout/)
* [Grid garden - A game for learning CSS grid](http://cssgridgarden.com/)
