document.querySelector('textarea').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      getVal()
      document.querySelector('textarea').value = "";
    }
});

function getVal() {
    var val = document.querySelector('textarea').value;
    copyToClipboard(yokomoji(val));
    document.querySelector('textarea').value = "";
    alert("クリップボードにコピー済み\nこのままエクセルシートに貼り付け");
}

function yokomoji(e) {
    cleanedData = e.replace(/\n/g, "\t");
    return cleanedData;
}

function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
 }