var app = app || {};

// Todo Model
// ----------
// Our basic **todo** model has 'title' and 'completed' attributes

app.Todo = Backbone.Model.extend({

    // Default Attributes
    defaults: {
        title: '',
        completed: false
    },

    // Toggle the 'completed' state of this todo item
    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }

});
