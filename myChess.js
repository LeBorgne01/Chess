var pieces = [
    {name: "blackking", color: "black", img: "bk.gif", li: 0, col: 4, type: "king"},
    {name: "blackqueen", color: "black", img: "bq.gif", li: 0, col: 3, type: "queen"},
    {name: "blackbishop1", color: "black", img: "bb.gif", li: 0, col: 2, type: "bishop"},
    {name: "blackbishop2", color: "black", img: "bb.gif", li: 0, col: 5, type: "bishop"},
    {name: "blackknight1", color: "black", img: "bn.gif", li: 0, col: 1, type: "knight"},
    {name: "blackknight2", color: "black", img: "bn.gif", li: 0, col: 6, type: "knight"},
    {name: "blackrook1", color: "black", img: "br.gif", li: 0, col: 0, type: "rook"},
    {name: "blackrook2", color: "black", img: "br.gif", li: 0, col: 7, type: "rook"},
    {name: "blackpawn1", color: "black", img: "bp.gif", li: 1, col: 0, type: "pawn", first: true},
    {name: "blackpawn2", color: "black", img: "bp.gif", li: 1, col: 1, type: "pawn", first: true},
    {name: "blackpawn3", color: "black", img: "bp.gif", li: 1, col: 2, type: "pawn", first: true},
    {name: "blackpawn4", color: "black", img: "bp.gif", li: 1, col: 3, type: "pawn", first: true},
    {name: "blackpawn5", color: "black", img: "bp.gif", li: 1, col: 4, type: "pawn", first: true},
    {name: "blackpawn6", color: "black", img: "bp.gif", li: 1, col: 5, type: "pawn", first: true},
    {name: "blackpawn7", color: "black", img: "bp.gif", li: 1, col: 6, type: "pawn", first: true},
    {name: "blackpawn8", color: "black", img: "bp.gif", li: 1, col: 7, type: "pawn", first: true},

    {name: "whiteking", color: "white", img: "wk.gif", li: 7, col: 4, type: "king"},
    {name: "whitequeen", color: "white", img: "wq.gif", li: 7, col: 3, type: "queen"},
    {name: "whitebishop1", color: "white", img: "wb.gif", li: 7, col: 2, type: "bishop"},
    {name: "whitebishop2", color: "white", img: "wb.gif", li: 7, col: 5, type: "bishop"},
    {name: "whiteknight1", color: "white", img: "wn.gif", li: 7, col: 1, type: "knight"},
    {name: "whiteknight2", color: "white",img: "wn.gif", li: 7, col: 6, type: "knight"},
    {name: "whiterook1", color: "white", img: "wr.gif", li: 7, col: 0, type: "rook"},
    {name: "whiterook2", color: "white", img: "wr.gif", li: 7, col: 7, type: "rook"},
    {name: "whitepawn1", color: "white", img: "wp.gif", li: 6, col: 0, type: "pawn", first: true},
    {name: "whitepawn2", color: "white", img: "wp.gif", li: 6, col: 1, type: "pawn", first: true},
    {name: "whitepawn3", color: "white", img: "wp.gif", li: 6, col: 2, type: "pawn", first: true},
    {name: "whitepawn4", color: "white", img: "wp.gif", li: 6, col: 3, type: "pawn", first: true},
    {name: "whitepawn5", color: "white", img: "wp.gif", li: 6, col: 4, type: "pawn", first: true},
    {name: "whitepawn6", color: "white", img: "wp.gif", li: 6, col: 5, type: "pawn", first: true},
    {name: "whitepawn7", color: "white", img: "wp.gif", li: 6, col: 6, type: "pawn", first: true},
    {name: "whitepawn8", color: "white", img: "wp.gif", li: 6, col: 7, type: "pawn", first: true}

];

var firstPlay = true;
var click1 = [null, null, null, null];
var click2 = [null, null, null, null];




window.onload = function(){
    initChessboard();

};

function initChessboard() {
    var chessBoard = document.getElementById("chessboard");
    var table = document.createElement("table");

    for(var i = 0; i < 8; i++){
        var line = document.createElement("tr");

        for(var j = 0; j < 8; j++){
            var frame = document.createElement("td");

            frame.setAttribute("class", (((i+j)%2 == 0)?"white" : "black"));

            frame.setAttribute("id","cell-c"+j+"-l"+i);
            frame.setAttribute("onClick","playChess(this)");
            line.appendChild(frame);
        }
        table.appendChild(line);
    }
    chessBoard.appendChild(table);
    setBlackPicture();
    setWhitePicture();
}

function setBlackPicture(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var selectedFrame = document.getElementById("cell-c"+j+"-l"+i);

            if(i == 1){
                selectedFrame.innerHTML = "<img src='picture/bp.gif' alt='pawn' id='bp'+i>";
            }
            else if(i == 0){
                if(j == 0 || j == 7){
                    selectedFrame.innerHTML = "<img src='picture/br.gif' alt='rook'>";
                }
                else if(j == 1 || j == 6){
                    selectedFrame.innerHTML = "<img src='picture/bn.gif' alt='knight'>";
                }
                else if(j == 2 || j == 5){
                    selectedFrame.innerHTML = "<img src='picture/bb.gif' alt='bishop'>";
                }
                else if(j == 3){
                    selectedFrame.innerHTML = "<img src='picture/bq.gif' alt='queen'>";
                }
                else if(j == 4){
                    selectedFrame.innerHTML = "<img src='picture/bk.gif' alt='king'>";
                }
            }
        }
    }
}

function setWhitePicture(){
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            var selectedFrame = document.getElementById("cell-c"+j+"-l"+i);

            if(i == 6){
                selectedFrame.innerHTML = "<img src='picture/wp.gif' alt='pawn'>";
            }
            else if(i == 7){
                if(j == 0 || j == 7){
                    selectedFrame.innerHTML = "<img src='picture/wr.gif' alt='rook'>";
                }
                else if(j == 1 || j == 6){
                    selectedFrame.innerHTML = "<img src='picture/wn.gif' alt='knight'>";
                }
                else if(j == 2 || j == 5){
                    selectedFrame.innerHTML = "<img src='picture/wb.gif' alt='bishop'>";
                }
                else if(j == 3){
                    selectedFrame.innerHTML = "<img src='picture/wq.gif' alt='queen'>";
                }
                else if(j == 4){
                    selectedFrame.innerHTML = "<img src='picture/wk.gif' alt='king'>";
                }
            }
        }
    }
}

function playChess(item){
    var idItem = item.getAttribute("id");

    var col = idItem.charAt(6);
    var lin = idItem.charAt(9);


    if(firstPlay){
        if(!isEmpty(col,lin)){
            firstPlay = false;

            click1[0] = item;
            click1[1] = col;
            click1[2] = lin;
            click1[3] = getIDPiece(col, lin);

            item.setAttribute("class","red");

        }
    }
    else{
        firstPlay = true;
        if(col == click1[1] && lin == click1[2]){
            firstPlay = false;

            reinitCase(click1[0], click1[1], click1[2]);


            click1[0] = item;
            click1[1] = col;
            click1[2] = lin;
            click1[3] = getIDPiece(col, lin);

            click1[0].setAttribute("class","red");
        }
        else if(!isEmpty(col,lin)){
            click2[0] = item;
            click2[1] = col;
            click2[2] = lin;
            click2[3] = getIDPiece(col, lin);

            if(pieces[click2[3]].color == pieces[click1[3]].color){
                firstPlay = false;

                reinitCase(click1[0], click1[1], click1[2]);

                click1[0] = item;
                click1[1] = col;
                click1[2] = lin;
                click1[3] = getIDPiece(col, lin);

                click1[0].setAttribute("class","red");
            }
            else{
                var tacked = click2[3];

                switch(pieces[click1[3]].type){
                    case "pawn":
                        takePawn(tacked);
                        break;
                    case "rook":
                        takeRook(tacked);
                        break;
                    case "knight":
                        takeKnight(tacked);
                        break;
                    case "bishop":
                        takeBishop(tacked);
                        break;
                    case "queen":
                        takeQueen(tacked);
                        break;
                    case "king":
                        takeKing(tacked);
                        break;

                }

                reinitCase(click1[0], click1[1], click1[2]);
            }


        }
        else{
            console.log("case vide");
            click2[0] = item;
            click2[1] = col;
            click2[2] = lin;

            switch(pieces[click1[3]].type){
                case "pawn":
                    movePawn();
                    break;
                case "rook":
                    moveRook();
                    break;
                case "knight":
                    moveKnight();
                    break;
                case "bishop":
                    moveBishop();
                    break;
                case "queen":
                    moveQueen();
                    break;
                case "king":
                    moveKing();
                    break;

            }

            reinitCase(click1[0], click1[1], click1[2]);

        }

    }


}

function isEmpty(col,lin){
    for(var i=0; i<pieces.length;i++){
        if(pieces[i].col == col && pieces[i].li == lin){
            return false;
        }
    }
    return true;
}

function getIDPiece(col,lin){
    for(var i=0; i<pieces.length;i++){
        if(pieces[i].col == col && pieces[i].li == lin){
            return i;
            break;
        }
    }
}

function reinitCase(item, col, lin){
    var temp = parseInt(col) + parseInt(lin);

    if(temp % 2 == 0){
        item.removeAttribute("class");
        item.setAttribute("class","white");
    }
    else {
        item.removeAttribute("class");
        item.setAttribute("class","black");
    }
}

function movePawn(){
    if(pieces[click1[3]].first){
        if(pieces[click1[3]].color == "white"){
            if(((click2[2] == click1[2] - 1) || (click2[2] == click1[2] - 2)) && (click2[1] == click1[1])){
                pieces[click1[3]].first = false;
                pieces[click1[3]].col = click2[1];
                pieces[click1[3]].li = click2[2];

                click2[0].innerHTML = "<img src='picture/wp.gif' alt='pawn' id='wp'+i>";
                click1[0].innerHTML = "";
            }
        }
        else{
            if(((click2[2] == parseInt(click1[2]) + 1) || (click2[2] == parseInt(click1[2]) + 2)) && (click2[1] == click1[1])){
                pieces[click1[3]].first = false;
                pieces[click1[3]].col = click2[1];
                pieces[click1[3]].li = click2[2];

                click2[0].innerHTML = "<img src='picture/bp.gif' alt='pawn' id='bp'+i>";
                click1[0].innerHTML = "";
            }
        }
    }
    else{
        if(pieces[click1[3]].color == "white"){
            if((click2[2] == click1[2] - 1) && (click2[1] == click1[1])){
                pieces[click1[3]].col = click2[1];
                pieces[click1[3]].li = click2[2];

                click2[0].innerHTML = "<img src='picture/wp.gif' alt='pawn' id='wp'+i>";
                click1[0].innerHTML = "";
            }
        }
        else{
            if((click2[2] == parseInt(click1[2]) + 1) && (click2[1] == click1[1])){
                pieces[click1[3]].col = click2[1];
                pieces[click1[3]].li = click2[2];

                click2[0].innerHTML = "<img src='picture/bp.gif' alt='pawn' id='bp'+i>";
                click1[0].innerHTML = "";
            }
        }
    }
}

function moveRook(){
    if(click2[1] == click1[1] || click2[2] == click1[2]){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wr.gif' alt='knight' id='wr'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/br.gif' alt='knight' id='br'+i>";
        }

        click1[0].innerHTML = "";
    }
}

function moveKnight() {
    if((((click2[1] == parseInt(click1[1]) + 2) || (click2[1] == click1[1] - 2)) && ((click2[2] == parseInt(click1[2]) + 1) || (click2[2] == click1[2] - 1)))   ||    (((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1)) && ((click2[2] == parseInt(click1[2]) + 2) || (click2[2] == click1[2] - 2)))){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wn.gif' alt='knight' id='wn'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bn.gif' alt='knight' id='bn'+i>";
        }

        click1[0].innerHTML = "";

    }
}

function moveBishop() {
    if(((click2[1] - click1[1]) == (click2[2] - click1[2])) || ((click2[1] - click1[1]) == (click1[2] - click2[2]))){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wb.gif' alt='knight' id='wb'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bb.gif' alt='knight' id='bb'+i>";
        }

        click1[0].innerHTML = "";
    }
}

function moveQueen() {
    if((((click2[1] - click1[1]) == (click2[2] - click1[2])) || ((click2[1] - click1[1]) == (click1[2] - click2[2]))) || (click2[1] == click1[1] || click2[2] == click1[2])){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wq.gif' alt='knight' id='wq'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bq.gif' alt='knight' id='bq'+i>";
        }

        click1[0].innerHTML = "";
    }
}

function moveKing(){
    if(((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1) || (click2[1] == click1[1])) && ((click2[2] == parseInt(click1[2]) + 1) || (click2[2] == click1[2] - 1) || (click2[2] == click1[2]))){
        console.log("king move");

        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wk.gif' alt='knight' id='wk'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bk.gif' alt='knight' id='bk'+i>";
        }

        click1[0].innerHTML = "";
    }
}

function takePawn(tacked){
    console.log(click2);
    if(pieces[click1[3]].color == "white"){
        if(((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1)) && (click2[2] == click1[2] - 1)){
            pieces[click1[3]].first = false;
            pieces[click1[3]].col = click2[1];
            pieces[click1[3]].li = click2[2];

            click2[0].innerHTML = "<img src='picture/wp.gif' alt='pawn' id='wp'+i>";
            click1[0].innerHTML = "";
            pieces[tacked].col = -1;
            pieces[tacked].li = -1;

            addDead(tacked);
        }
    }
    else{
        if(((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1)) && (click2[2] == parseInt(click1[2]) + 1)){
            pieces[click1[3]].first = false;
            pieces[click1[3]].col = click2[1];
            pieces[click1[3]].li = click2[2];

            click2[0].innerHTML = "<img src='picture/bp.gif' alt='pawn' id='bp'+i>";
            click1[0].innerHTML = "";
            pieces[tacked].col = -1;
            pieces[tacked].li = -1;

            addDead(tacked);
        }
    }
}

function takeRook(tacked){
    if(click2[1] == click1[1] || click2[2] == click1[2]){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wr.gif' alt='knight' id='wr'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/br.gif' alt='knight' id='br'+i>";
        }

        click1[0].innerHTML = "";
        pieces[tacked].col = -1;
        pieces[tacked].li = -1;

        addDead(tacked);
    }
}

function takeKnight(tacked){
    if((((click2[1] == parseInt(click1[1]) + 2) || (click2[1] == click1[1] - 2)) && ((click2[2] == parseInt(click1[2]) + 1) || (click2[2] == click1[2] - 1)))   ||    (((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1)) && ((click2[2] == parseInt(click1[2]) + 2) || (click2[2] == click1[2] - 2)))){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wn.gif' alt='knight' id='wn'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bn.gif' alt='knight' id='bn'+i>";
        }

        click1[0].innerHTML = "";
        pieces[tacked].col = -1;
        pieces[tacked].li = -1;

        addDead(tacked);
    }
}

function takeBishop(tacked){
    if(((click2[1] - click1[1]) == (click2[2] - click1[2])) || ((click2[1] - click1[1]) == (click1[2] - click2[2]))){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wb.gif' alt='knight' id='wb'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bb.gif' alt='knight' id='bb'+i>";
        }

        click1[0].innerHTML = "";
        pieces[tacked].col = -1;
        pieces[tacked].li = -1;

        addDead(tacked);
    }
}

function takeQueen(tacked){
    if((((click2[1] - click1[1]) == (click2[2] - click1[2])) || ((click2[1] - click1[1]) == (click1[2] - click2[2]))) || (click2[1] == click1[1] || click2[2] == click1[2])){
        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wq.gif' alt='knight' id='wq'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bq.gif' alt='knight' id='bq'+i>";
        }

        click1[0].innerHTML = "";
        pieces[tacked].col = -1;
        pieces[tacked].li = -1;

        addDead(tacked);
    }
}

function takeKing(tacked){
    if(((click2[1] == parseInt(click1[1]) + 1) || (click2[1] == click1[1] - 1) || (click2[1] == click1[1])) && ((click2[2] == parseInt(click1[2]) + 1) || (click2[2] == click1[2] - 1) || (click2[2] == click1[2]))){
        console.log("king move");

        pieces[click1[3]].col = click2[1];
        pieces[click1[3]].li = click2[2];

        if(pieces[click1[3]].color == "white"){
            click2[0].innerHTML = "<img src='picture/wk.gif' alt='knight' id='wk'+i>";
        }
        else{
            click2[0].innerHTML = "<img src='picture/bk.gif' alt='knight' id='bk'+i>";
        }

        click1[0].innerHTML = "";
        pieces[tacked].col = -1;
        pieces[tacked].li = -1;

        addDead(tacked);
    }
}

function addDead(idDead){
    if(pieces[idDead].color == "white"){
        var listDead = document.getElementById("listDeadWhite");
    }
    else{
        var listDead = document.getElementById("listDeadBlack");
    }

    var li = document.createElement("li");
    li.innerHTML = "<img src='picture/"+pieces[idDead].img+"' alt='"+pieces[idDead].name+"'>";
    listDead.appendChild(li);
}