'use strict'

let color = ['#8FD8D8','#66CCCC','#ADEAEA','#70DBDB','#AEEEEE','#AFEEEE','#008080','#008B8B','#37FDFC','#00EEEE','#0EBFE9','#0BB5FF'];

let id = ['#a','#b','#c','#d','#e','#f','#g','#h','#i']

function genRdmCol() {
  for (var i = 0; i < id.length; i++) {
    var str = id[i];
    let rdmColor = color[Math.floor(Math.random() * color.length)];

    $(str).css('background-color', rdmColor);
  }
}

genRdmCol();