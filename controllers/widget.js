_.extend(this, {
	value: null,

	construct: function(config) {
		$.textarea.applyProperties(_.omit(config, 'id', '__parentSymbol', '__itemTemplate', '$model'));

		$.value = '';

		if (OS_IOS) {
			$.label.applyProperties({
				text: config.hintText,
				font: config.font
			});
		}
	},

	setValue: function(value) {
		$.textarea.value = value;
		$.value = value;

		if(OS_IOS && $.textarea.value.length) {
			$.label.hide();
		}
	},

	focus: function() {
		$.textarea.focus();
	},

	blur: function() {
		$.textarea.blur();
	},

	addEventListener: function(type, callback) {
		$.on(type, callback);
	},

	removeEventListener: function(type, callback) {
		$.off(type, callback);
	},

	applyProperties: function(config) {
		$.textarea.applyProperties(config);
	},

	destruct: function() {
		$.off();
	}
});

function onFocus(evt) {
	$.trigger(evt.type, evt);
}

function onBlur(evt) {
	$.trigger(evt.type, evt);
}

function onChange(evt) {
	$.value = this.value;
	
	if (OS_IOS){
	    if (this.value.length > 0){
	        $.label.hide();
	    } else{
	        $.label.show();
	    }
	}

	$.trigger(evt.type, evt);
}
