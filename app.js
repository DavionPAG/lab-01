'use strict'

let color = ['#E74C3C', '#9B59B6', '#2980B9', '#1ABC9C', '#78281F', '#78281F', '#0B5345', '#7B7D7D', '#1B4F72', '#186A3B', '#7D6608', '#6E2C00', '#424949', '#212F3D', '#FDEDEC', '#F4ECF7', '#E8F8F5', '#E8F6F3', '#82E0AA', '#FAE5D3', '#D5DBDB'];

let colorCheck = []

let id = ['#a', '#b', '#c', '#d', '#e', '#f', '#g', '#h', '#i']



function genRdmCol() {
  for (var i = 0; i < id.length; i++) {
    var str = id[i];
    let rdmColor = color[Math.floor(Math.random() * color.length)];
    colorCheck.push(rdmColor)
    if (colorCheck.includes === rdmColor) {
      genRdmCol()
    }
    $(str).css('background-color', rdmColor);
  }
}

genRdmCol();

$(document).ready($(window).bind("resize", checkPosition));

function checkPosition() {
  if ($(window).width() === 480 || $(window).width() === 720) {
    genRdmCol();
  }
  
};


