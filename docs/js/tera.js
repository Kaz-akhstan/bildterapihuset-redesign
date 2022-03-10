let terapeuter = ["Anna Karin Karlsson", 
"Birgitta Englund", "Carin Salander", 
"Gunilla Berglund", "Karin Egberg Thyme", 
"Katarina Sihlén", "Leena Malmi Pauser", 
"Ninne Lindgren", "Ulla Kiivuori"];

let terapi = ["Individuell Terapi", "Grupp Terapi", "Workshop"]

var select1 = document.getElementById('selectTera');
var select2 = document.getElementById('selectTerapi');

window.onload = function()
{
    for(var i = 0; i<terapeuter.length; i++)
    {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = terapeuter[i];
        select1.appendChild(opt);
    }
    for(var j = 0; j<terapi.length; j++)
    {
        var opt = document.createElement('option');
        opt.value = j;
        opt.innerHTML = terapi[j];
        select2.appendChild(opt);
    }
}