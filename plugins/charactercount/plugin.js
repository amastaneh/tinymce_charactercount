/**
 * plugin.js
 *
 * Copyright, Web Design Iran
 * FREE License.
 *
 */

/*global tinymce:true */

tinymce.PluginManager.add('charactercount', function (editor) {
	var self = this;

	function update() {
		editor.theme.panel.find('#charactercount').text(['Characters: {0}', self.getCount()]);
	}

	editor.on('init', function () {
		var statusbar = editor.theme.panel && editor.theme.panel.find('#statusbar')[0];

		if (statusbar) {
			window.setTimeout(function () {
				statusbar.insert({
					type: 'label',
					name: 'charactercount',
					text: ['Characters: {0}', self.getCount()],
					classes: 'wordcount',
					disabled: editor.settings.readonly
				}, 0);
				editor.on('setcontent beforeaddundo', update);
				editor.on('keyup', update);
			}, 0);
		}
	});

	self.getCount = function () {
		return editor.getContent().length;
	};
});