function editElement(element, stringMatcher, replacer) {

    let regex = new RegExp(stringMatcher,'g');

    console.log(regex);

    element.textContent = element.textContent.replace(regex, replacer);

    return element.textContent;
}