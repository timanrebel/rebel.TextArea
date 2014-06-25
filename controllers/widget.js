_.extend(this, {
	value: null,

	construct: function(config) {
		$.textarea.applyProperties(_.omit(config, 'id', '__parentSymbol', '__itemTemplate', '$model'));

		$.value = '';

		if (OS_IOS)
			$.label.applyProperties({
				text: config.hintText,
				font: config.font
			});
	},

	setValue: function(value) {
		$.textarea.value = value;
		$.value = value;

		if($.textarea.value.length)
			$.label.hide();
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

	destruct: function() {
		$.off();
	}
});

function onFocus(evt) {
	if (OS_IOS) {
		$.label.hide();
	}

	$.trigger(evt.type, evt);
}

function onBlur(evt) {
	if (OS_IOS) {
		if (!this.hasText())
			$.label.show();
	}

	$.trigger(evt.type, evt);
}

function onChange(evt) {
	$.value = this.value;

	$.trigger(evt.type, evt);
}
