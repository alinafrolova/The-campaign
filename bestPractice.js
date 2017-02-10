var alternateRegValidator;
alternateRegValidator = {

    init: function () {
        this.addHandlerToNextBtnL();
        this.goToStep(1);
    },

    goToStep: function (stepNumber) {
        var form = jQuery('#signupForm');
        form.attr('data-mm-step', stepNumber);
    },

    addHandlerToNextBtnL: function () {
        jQuery('<a class = "btn btn-warning " id="secondStepBtn">Next Step</a>').appendTo('.signup-col-left');
        jQuery('#secondStepBtn').on('click', function () {
            this.runValidator();
        }.bind(this));
    },
    
    runValidator: function () {
        var fields = ['firstname', 'lastname', 'address1', 'postcode', 'city', 'phonenumber'];
        for (var i = 0; i < fields.length; i++) {
            jQuery("#" + fields[i]).trigger('blur');
        }
        setTimeout(function () {
            this.checkErrors();
        }.bind(this), 0);
    },
    checkErrors: function () {
        var errors = jQuery('.error');
        if (!errors) {
            this.goToStep(2);
        }
    }

};

//connect CSS style
jQuery(document.head).append(
'<style> #signupForm[data-mm-step="1"] .signup-col-right,#signupForm[data-mm-step="2"] .signup-col-left {  display: none;}</style>'
);
alternateRegValidator.init();
