# DOCRX

Docrx is javascript library for rendering documentation files.

### Markdown
Refer to [markdown documentation](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Code Blocks
...are processed with [highlightjs](https://highlightjs.org/).
```
// handle code blocks
$('pre code').each((i, block) => {
    hljs.highlightBlock(block);
});
```

### Charts
Powered by [ZingCharts](https://www.zingchart.com/).
<div class="zing-chart" width: "300" height="200"
	data-chart='{"type" : "bar","series": [{"values": [35, 42, 67, 89]},{"values": [28, 40, 39, 36]}]}'>
</div>

### Diagrams
Powered by [Mermaid](https://knsv.github.io/mermaid/#mermaid).
<div class="mermaid">
graph LR;
    ConDestructor(Controller destructor)-->ModPreRender(Module preRender)
    ModPreRender-->ConConstructor(Controller Constructor)
    ConConstructor-->ConPostRender(Controller preRender)
    ConPostRender-->ConPreRender(Controller postRender)
    ConPreRender-->ModPostRender(Module postRender)
</div>

### Math formulas
MathJax syntax [help](http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm).
$$x_{1,2} = \frac{-b \pm \sqrt{b^2-4ac}}{2b}$$