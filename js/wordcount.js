
var WordCount = function (text) {
    text = text.replace(/\r?\n|\r/g, '');
    this.full_text = text;

    // remove other characters
    this.text = text.replace(/-/, ' ');
    this.text = this.text.replace(/[^()a-zA-Z“”" ]\B/, '');
};

WordCount.prototype.characterCount = function () {
    return this.full_text.length;
};

WordCount.prototype.words = function () {
	words_list = [];
	current_word = "";
	for (var i in this.text) {
		c = this.text[i];
		if (c == " ") {
			if (current_word !== "") {
				words_list.push(current_word);
				current_word = "";
			}
		}
		else if (c == "." || c == "?" || c == "!") {
			if (current_word !== "") {
				words_list.push(current_word);
				current_word = "";
			}
		}
		else {
			current_word += c;
		}
	}
	if (current_word !== "") {
		words_list.push(current_word);
		current_word = "";
	}
	return words_list;
};

WordCount.prototype.wordCount = function() {
	return this.words().length;
};

WordCount.prototype.sentenceCount = function () {
	var periods      = (this.full_text.match(/\./g) || []).length;
	var questions    = (this.full_text.match(/\?/g) || []).length;
	var exclamations = (this.full_text.match(/!/g) || []).length;
	return periods + questions + exclamations;
};
