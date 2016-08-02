
var WordCount = function (text) {
    text = text.replace(/\r?\n|\r/g, '');
    this.text = text;
};

WordCount.prototype.characterCount = function () {
    return this.full_text.length;
};

WordCount.prototype.words = function () {
	var words = [], word = '';

	for (var i in this.text) {
		var c = this.text[i];
		if (c == ' ' || c == '.' || c == '?' || c == '!' || c == '-') {
			if (word !== '') {
				words.push(word);
			}
            word = '';
		} else {
			word += c;
		}
	}
	if (word !== '') {
		words.push(word);
	}
	return words;
};

WordCount.prototype.rewords = function () {
    return this.text.split(/\s+/);
};

WordCount.prototype.wordCount = function() {
	return this.words().length;
};
