# CSS

element selector - selector for elements such as <p>

class selector - selector for choosing classes such as <p class="cos tam"> -> .cos tam

id selector - same as with class, however we use # rather than .


# Selectors

inline > id > class > element

#pseudo selectors

used for actions such as hover, first-child, last-child, only-child etc
use it by element_name : property

# advanced selectors

<b>one after another</b>: smth + smth2 for example:
h2 + a -> every anchor tag that follows an h2

<p><b> same as above, however both elements have to have the same parent </b>:
h2 ~ a -> same as above but have to have same parents

<p><b> every element inside of other element</b>:
ul > li -> every single li that is a child of ul

<p><b> descendant selector </b>:
for example : li ul -> any li that eventually goes bac kto ul

<p><b>attribute se lector</b> select certain elements based on their attributes:
h2[class="button"] -> select all h2 that has attribute class with name "button</p>
^ might be used as regex for example img[src^="cos"] -> every image that source starts with,
$ is for ends, * for contains

# size properties
vh, vw - viewport height, width

# values
There are different realtive and absolute values

check out how pixels are configured in relation to DPI

# text decoration
text-decoration - property allows to change the looks of text

text-transform - property used for setting text case

text-align - aligning text to some side

font-weight: how bold font is

font-family - property to set the type of font, there may be multiple to fall back to

There are  fonts: serif, sans-serif and monospace. There are a lot of fonts on google fonts.

# box model

Everything is a box, which has content, padding, border and margin, each centered


#### Links learned from:
https://www.youtube.com/watch?v=pQN-pnXPaVg
https://www.youtube.com/watch?v=PkZNo7MFNFg
https://www.youtube.com/watch?v=1Rs2ND1ryYc


