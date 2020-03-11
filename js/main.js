let tiles = [ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0] ];

let colors = [ [0, '#ccc'], [3, '#eee4da'], [6, '#ece0c8'], [12, '#f1b078'], [24, '#ee8c4f'], [48, '#f57c5f'], [96, '#e85939'], [192, '#f2d86a'], [384, '#eeca30'], [768, '#e1c229'], [1536, '#e2b913'], [3072, '#ecc400']
]; 



let AddingColors = (gridRow, gridColumn) => {
  let [, hexColor] = colors.find(([tileValue,]) => tiles[gridRow][gridColumn] == tileValue);
      document.getElementsByClassName("tile_"+gridColumn+gridRow)[0].style.background = hexColor;
  let [tileValue,] = colors.find(([tileValue,]) => tiles[gridRow][gridColumn] == tileValue)
      if(tileValue!=0){
        document.getElementsByClassName("tile_"+gridColumn+gridRow)[0].innerHTML = tileValue;
      }
}


function drawTiles(){
  for(let i=0; i<4; i++){
      for(let j=0; j<4; j++){
          if(tiles[j][i]=='0')document.getElementsByClassName("tile_"+i+j)[0].innerHTML = '';
          AddingColors(i, j);
    }
  }
}


function generateRandmly(){
  let x =Math.floor(Math.random() * 4);
  let y =Math.floor(Math.random() * 4);
  if(tiles[x][y]=='0')
  {
     tiles[x][y]='3';
  }
  else generateRandmly();
}


function goDown(){
      function down(){
          if(tiles[3][i]=='0'){
            tiles[3][i]=tiles[2][i];
            tiles[2][i]='0';
          }

          if(tiles[2][i]=='0'){
            tiles[2][i]=tiles[1][i];
            tiles[1][i]='0';
                  if(tiles[3][i]=='0'){
                    tiles[3][i]=tiles[2][i];
                    tiles[2][i]='0';
                  }
          }
          if(tiles[1][i]=='0'){
            tiles[1][i]=tiles[0][i];
            tiles[0][i]='0';
                  if(tiles[2][i]=='0'){
                    tiles[2][i]=tiles[1][i];
                    tiles[1][i]='0';
                          if(tiles[3][i]=='0'){
                            tiles[3][i]=tiles[2][i];
                            tiles[2][i]='0';
                          }
                  }        
          }
      }
  for(var i=0; i<=3; i++){
      down();
          for(var j=3; j>0; j--){
              if(tiles[j][i]==tiles[j-1][i]){
                tiles[j][i]*=2;
                tiles[j-1][i]='0';
              }
          }
      down();
    }
  
}


function goUp(){
      function up(){
          if(tiles[0][i]=='0'){
            tiles[0][i]=tiles[1][i];
            tiles[1][i]=0;
          }
      
          if(tiles[1][i]=='0'){
            tiles[1][i]=tiles[2][i];
            tiles[2][i]=0;
                  if(tiles[0][i]=='0'){
                    tiles[0][i]=tiles[1][i];
                    tiles[1][i]=0;
                  }
          }
      
          if(tiles[2][i]=='0'){
            tiles[2][i]=tiles[3][i];
            tiles[3][i]=0;
                  if(tiles[1][i]=='0'){
                    tiles[1][i]=tiles[2][i];
                    tiles[2][i]=0;
                          if(tiles[0][i]=='0'){
                            tiles[0][i]=tiles[1][i];
                            tiles[1][i]=0;
                          }
                  }
          }
      }

  for(var i=3; i>=0; i--){
      up();
          for(var j=0; j<3; j++){
              if(tiles[j][i]==tiles[j+1][i]){
                tiles[j][i]*=2;
                tiles[j+1][i]=0;
              }
          }   
      up()
  }
}


function goLeft(){
      function left(){
          if(tiles[i][0]=='0'){
            tiles[i][0]=tiles[i][1];
              tiles[i][1]=0;
          }
      
          if(tiles[i][1]=='0'){
            tiles[i][1]=tiles[i][2];
            tiles[i][2]=0;
                  if(tiles[i][0]=='0'){
                    tiles[i][0]=tiles[i][1];
                    tiles[i][1]=0;
                  }
          }
      
          if(tiles[i][2]=='0'){
            tiles[i][2]=tiles[i][3];
            tiles[i][3]=0;
                  if(tiles[i][1]=='0'){
                    tiles[i][1]=tiles[i][2];
                    tiles[i][2]=0;
                          if(tiles[i][0]=='0'){
                            tiles[i][0]=tiles[i][1];
                            tiles[i][1]=0;
                          }
                  }
          }
      }

  for(var i=3; i>=0; i--){
      left();
          for(var j=0; j<3; j++){
              if(tiles[i][j]==tiles[i][j+1]){
                tiles[i][j]*=2;
                  tiles[i][j+1]=0;
              }
            }
      left();
  }

}


function goRight(){
  function right(){
      
      if(tiles[i][3]=='0'){
        tiles[i][3]=tiles[i][2];
        tiles[i][2]='0';
      }

      if(tiles[i][2]=='0'){
        tiles[i][2]=tiles[i][1];
        tiles[i][1]='0';
              if(tiles[i][3]=='0'){
                tiles[i][3]=tiles[i][2];
                tiles[i][2]='0';
              }
      }
      if(tiles[i][1]=='0'){
        tiles[i][1]=tiles[i][0];
        tiles[i][0]='0';
              if(tiles[i][2]=='0'){
                tiles[i][2]=tiles[i][1];
                  tiles[i][1]='0';
                      if(tiles[i][3]=='0'){
                        tiles[i][3]=tiles[i][2];
                        tiles[i][2]='0';
                      }
              }        
      }
  }
for(var i=0; i<=3; i++){
  right();
      for(var j=3; j>0; j--){
          if(tiles[i][j]==tiles[i][j-1]){
            tiles[i][j]*=2;
            tiles[i][j-1]='0';
          }
      }
  right();
}
}


function checkTiles(){
  for(var i=0; i<4; i++){
      for(var j=0; j<4; j++){
          if(tiles[i][j]=='3072')alert("YOU WIN!")
      }
  }
}




function generateRandmly_drawTiles_checkTiles(){  
  generateRandmly();
  drawTiles();
  checkTiles()

}

function initialize() {
  generateRandmly();
  generateRandmly();
  drawTiles();

window.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37: 
      goLeft();
      generateRandmly_drawTiles_checkTiles();
      break;
    case 38:
      goUp();
      generateRandmly_drawTiles_checkTiles();
      break;
    case 39:
      goRight();
      generateRandmly_drawTiles_checkTiles();
      break;
    case 40: 
      goDown();
      generateRandmly_drawTiles_checkTiles();
      break;
  }
},);





document.addEventListener("keydown", checkKeyPressed);
function checkKeyPressed(e) {
	if (e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40 )  {
    alert('Game Over');
      }
}
setTimeout(checkKeyPressed(), 2000);




hammer("goLeft", function (e){
  goLeft();
  generateRandmly_drawTiles_checkTiles();
});

hammer("goRight", function (e){
  goRight();
  generateRandmly_drawTiles_checkTiles();
});

hammer("goUp", function (e){
  goUp();
  generateRandmly_drawTiles_checkTiles();
});

hammer("goDown", function (e){
  goDown();
  generateRandmly_drawTiles_checkTiles();
})
}


if (document.readyState != 'loading'){
  initialize();
} else {
window.addEventListener('DOMContentLoaded', initialize);
}

