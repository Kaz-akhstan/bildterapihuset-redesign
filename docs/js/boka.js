let terapeuter = ["Anna Karin Karlsson", 
"Birgitta Englund", "Carin Salander", 
"Gunilla Berglund", "Karin Egberg Thyme", 
"Katarina Sihlén", "Leena Malmi Pauser", 
"Ninne Lindgren", "Ulla Kiivuori"];

let terapi = ["Individuell Terapi", "Grupp Terapi", "Workshop"]

let months = ["JANUARI", "FEBRUARI", "MARS", 
"APRIL", "MAJ", "JUNI", "JULI", "AUGUSTI", 
"SEPTEMBER", "OKTOBER", "NOVEMBER", "DECEMBER"]

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

function markDate(e)
{
    for(var k = 1; k<=31; k++)
    {
        document.getElementById(k).style.background = "#0c4766";
        document.getElementById(k).style.color = "#eed369";
    }
    document.getElementById(e).style.background = "#eed369";
    document.getElementById(e).style.color = "#0c4766";
}

var monthInt = 2;
var yearInt = 2022;

function monthPlus()
{
    monthInt++;
    if(monthInt > 11)
    {
        monthInt = 0;
        yearInt++;
    }
    document.getElementById('monthLabel').innerHTML = months[monthInt];
    document.getElementById('yearLabel').innerHTML = yearInt;
}

function monthMinus()
{
    monthInt--;
    if(monthInt < 0)
    {
        monthInt = 11;
        yearInt--;
    }
    document.getElementById('monthLabel').innerHTML = months[monthInt];
    document.getElementById('yearLabel').innerHTML = yearInt;
}