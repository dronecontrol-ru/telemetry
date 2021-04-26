export class MicroTemplate {
    constructor(html, strings) {
        this.template = document.createElement('template');
        this.template.innerHTML = html;
        MicroTemplate.applyText(this.template.content, strings);
    }

    clone(strings) {
        const view = this.template.content.cloneNode(true).firstElementChild;
        view.tags = {};
        const tags = view.querySelectorAll('[data-tag]');
        for (let t = 0; t < tags.length; t++) {
            view.tags[tags[t].dataset.tag] = tags[t];
        }
        MicroTemplate.applyText(view, strings);
        return view;
    }
}

MicroTemplate.applyText = function(element, strings) {
    if (!strings) {
        return;
    }
    const texts = element.querySelectorAll('[data-text]');
    for (let t = 0; t < texts.length; t++) {
        const text = texts[t].dataset.text;
        if (!strings[text]) {
            continue;
        }
        texts[t].textContent = strings[text];
    }
}