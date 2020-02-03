'use strict'
//line 63 same like strHtml: += `<td onclick="cellClicked(this, +this.innerText)">${num}</td>`;


var gClickSound = new Audio('audio/click.wav');
var gWinSound = new Audio('audio/win.wav');
var gDifficulties = [{ nums: 16, size: 4 }, { nums: 25, size: 5 }, { nums: 36, size: 6 }];
var gSelectedDiff;
var gNums;
var gNextNum;



function init(diffIdx) {
    gSelectedDiff = gDifficulties[diffIdx];
    gNums = generateNums(gSelectedDiff.nums);
    gNextNum = 1;
    renderBoard(gSelectedDiff.size);
    reset();
    var elNextNumModal = document.querySelector('.next-number');
    elNextNumModal.style.display = 'block';
    var elWinModal = document.querySelector('.winner-modal');
    elWinModal.style.display = 'none';
    showNextNum();

}

function showWin() {
    var elTds = document.querySelectorAll('td');
    for (let i = 0; i < elTds.length; i++) {
        elTds[i].innerText = '👏';
    }
    var elNextNumModal = document.querySelector('.next-number');
    elNextNumModal.style.display = 'none';
    var elWinModal = document.querySelector('.winner-modal');
    elWinModal.style.display = 'block';
}

function showNextNum() {
    var elNumToShow = document.querySelector('.next-number span');
    elNumToShow.innerText = gNextNum;
}

function cellClicked(elCell, clickedNum) {
    if (clickedNum !== gNextNum) return;
    if (clickedNum === 1) start();
    gClickSound.play();
    gNextNum++;
    elCell.classList.add('clicked');
    if (gNextNum > gSelectedDiff.nums) {
        showWin();
        gWinSound.play();
        stop();
        return
    }
    showNextNum();
}

function renderBoard(size) {
    var strHtml = '';
    for (var i = 0; i < size; i++) {
        strHtml += `<tr>`;
        for (var j = 0; j < size; j++) {
            var num = gNums.splice(0, 1)[0];
            strHtml += `<td onclick="cellClicked(this, ${num})">${num}</td>`;
        }
        strHtml += '</tr>';
    }
    var elTable = document.querySelector('.board');
    elTable.innerHTML = strHtml;
}


function generateNums(amount) {
    var gameNums = [];
    for (var i = 0; i < amount; i++) {
        gameNums.push(i + 1);
    }
    shuffle(gameNums);
    return gameNums;
}
