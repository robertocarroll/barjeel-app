/*global Barjeel, Backbone*/

Barjeel.Models = Barjeel.Models || {};

(function () {
    'use strict';

    Barjeel.Models.PlayModel = Backbone.Model.extend({

        defaults: {
            id: '', // question 1, 2, 3, ...
            question: '',       // text of question to be asked.
            options: [],   // should contain every possible answer for the question.
            rightAnswer: '',     // '1|2|3'
        		userAnswer: ''
        }

    });

})();
