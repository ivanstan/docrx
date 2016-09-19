(function($) {

    function render(data, element) {
        // handle markdown
        element.html(marked(data));

        // handle code blocks
        $('pre code').each((i, block) => {
            hljs.highlightBlock(block);
        });

        // handle diagrams
        mermaid.init({noteMargin: 10}, '.mermaid');

        // hanlde charts
        $('.zing-chart').each((index, element) => {
            let chart = $(element),
            id = 'zing-chart-' + index,
                options = {
                    id  : id,
                    data: $(chart).data('chart')
                };

            if (chart.data('width') != 'undefined') {
                options['width'] = chart.data('width');
            }

            if (chart.data('height') != 'undefined') {
                options['height'] = chart.data('height');
            }

            chart.attr('id', id);
            zingchart.render(options);
        });
    }

    $.fn.docrx = function() {

        if(typeof window.MathJax == 'undefined') {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=default';
            $('head').append(s);
        }

        this.each(function(){
            var element = $(this),
                url = element.data('url');

            if(url == 'undefined') {
                render(element.html(), this);
                return this;
            }

            $.get(url, (data) => {
                element.append(data);
                render(data, element);
                return this;
            });
        });
    }

}(jQuery));