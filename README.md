# Berry ITCSS - ITCSS Architecture implemented by Berry

ITCSS - Inverted Triangle CSS - is a way to structure your CSS files in a project so you can easily manage and organize CSS styles.

ITCSS works well with other methodologies like BEM, Atomic CSS, Sass, etc.

It's created/suggested by Harry Roberts (https://twitter.com/csswizardry?lang=en), and here you can find infos: https://csswizardry.net/talks/2014/11/itcss-dafed.pdf

**1 - Settings**
- functions (used sometimes to define values in settings)
- Global variables and configuration

**2 - Tools**
- Mixins, utilities, functions

**3 - Base: ground zero styles**
- No classes:
- normalize/reset
- type selectors

**4 - Classes**
- Utility classes

**5 - Layout (Objects)**
- Cosmetic-free and reusable design patterns, only define layout and positioning: containers, grid, column
- First layer of class-based selector

**6 - Components**
- Specific cosmetic elements of UI
- first layer that introduce visual styling: buttons, forms, products-list
- Use explicit class names (eg. .products-list)

**7 - Modules**
- Multi-part components: navbar, cardlist

**8 - Trumps**
- Overrides and helper classes
