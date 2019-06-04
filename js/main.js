$(document).ready(function(){
    var first = Backbone.View.extend({
        tagName: "span",
        className: "abc",
        id: "idhye",
        initialize: function(){
            this.render();
        },
        render: function(){
            console.log("Hello Jay!");
            this.$el.html("This is the Content from HTML Page");
            // console.log(this.$el); //$el is Jquery elemet which refers to the DOM element
            console.log(this.el); // el is DOM elemet
            console.log(this.$el);// $el is Jquery elemet which refers to the DOM element
        }
    })
    //var f1 = new first();
    var f1 = new first({
        el: "#content"
    });
});