// For detecting the "Enter" key inside the text area
document.querySelector('textarea').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getVal()
      document.querySelector('textarea').value = "";
    }
});

// Getting the text inside the text area
function getVal() {
    var val = document.querySelector('textarea').value;
    copyToClipboard(yokomoji(val));
    document.querySelector('textarea').value = "";
    alert("クリップボードにコピー済み\nこのままエクセルシートに貼り付け");
}

// Column to row conversion
function yokomoji(e) {
    cleanedData = e.replace(/\n/g, "\t");
    return cleanedData;
}

// Automatically copies result after conversion to the clipboard 
function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
 }