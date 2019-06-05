$(document).ready(function(){
    var second = Backbone.View.extend({
        tagName: "p",
        initialize: function(){

            this.$el.html("Hello Jay!");

            //console.log(this.el); // Provide empty default div DOM element
            //console.log(this.$el); // This is Jquery Object which points to el
            //this.$el.html('This $el point to th p tag');
            //console.log("This is second Log");
            //$('#content').html("This is Div Content");
        }
    })

    var s1 = new second();
        $("#content").html(s1.$el);
});