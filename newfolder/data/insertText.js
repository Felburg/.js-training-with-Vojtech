function insertText(elemID, text)
{
    // Protoze netestujes na undefined je zbytecne vytvaret promennou. Dej to vse na jeden radek.
    var elem = document.getElementById(elemID);
    elem.innerHTML = text;
}
