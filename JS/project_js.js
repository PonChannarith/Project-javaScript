var CheckMenu=1;
document.querySelector('.login').onclick=function()
{
    document.querySelector('.login-box').style.display="block";
    document.querySelector('.Create-box').style.display="none";
    document.querySelector(".main").style.display="none";
}
document.querySelector('.create').onclick=function()
{
    document.querySelector('.Create-box').style.display="block";
    document.querySelector('.login-box').style.display="none";
    document.querySelector(".main").style.display="none";
}
document.querySelector('.loginleft').onclick=function()
{
    document.querySelector('.menu-left').style.left="-100%";
    CheckMenu=1;
    document.querySelector('.login-box').style.display="block";
    document.querySelector('.Create-box').style.display="none";
    document.querySelector(".main").style.display="none";
}
document.querySelector('.createleft').onclick=function()
{
    document.querySelector('.menu-left').style.left="-100%";
    CheckMenu=1;
    document.querySelector('.Create-box').style.display="block";
    document.querySelector('.login-box').style.display="none";
    document.querySelector(".main").style.display="none";
}
document.querySelector('.Deletelogin').onclick=function()
{
    document.querySelector('.login-box').style.display="none";
    document.querySelector('.main').style.display="block";
}
document.querySelector('.Deletecreate').onclick=function()
{
    document.querySelector('.Create-box').style.display="none";
    document.querySelector('.main').style.display="block";
}

document.querySelector('.fa-bars').onclick=function()
{
    if(CheckMenu==1)
    {
        document.querySelector('.menu-left').style.left="0";
        CheckMenu=2;
    }
    else{
        document.querySelector('.menu-left').style.left="-100%";
        CheckMenu=1;
    }
}
var content={
    ' <div class="path" style="background-color: blue; width:120px ;">T-Shirt</div><div class="content" style="border-top: 3px solid blue;">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ],
    '  <div class="path" style="background-color:red; width:120px ;">Skirt</div><div class="content" style="border-top: 3px solid red;">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ],
    '    <div class="path" style="background-color:gold; width:120px ;">Shoes</div><div class="content" style="border-top: 3px solid gold;">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ],
    '   <div class="path" style="background-color:rgb(252, 9, 179); width:120px ;">Shirt</div><div class="content" style="border-top: 3px solid rgb(252, 9, 179);">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ],
    ' <div class="path" style="background-color:green; width:120px ;">Pants</div><div class="content" style="border-top: 3px solid green;">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ],
    '       <div class="path" style="background-color:yellow; width:120px ;">Hats</div><div class="content" style="border-top: 3px solid yellow;">':[
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ],
        [
            '../img/Angkoe_Wat.jpeg',
            ' <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> <i class="fa fa-star" aria-hidden="true"></i>',
            ' T-Shirt <del>120$</del><b>103$</b>',
            'rand DUBAI',
            'Made in USA',
            'Sell in delivery in',
            'Cambodia'
        ]
    ]
}
var row='';
for(var key in content){
    var getkey= content[key];
    var tokeRow='';
    for(i in getkey){
        tokeRow+=`<div class="col-3">
        <figure>
            <div class="img">
                <img src="${getkey[i][0]}" alt="">
            </div>
            <div class="txt">
                <span class="star">
                 ${getkey[i][1]}
                </span>
                <span class="big"><br>
                ${getkey[i][2]}
                </span>
                <div class="border"></div>
                <div class="small">${getkey[i][3]}</div>
                <div class="small">${getkey[i][4]}</div>
                <div class="small">${getkey[i][5]}</div>
                <div class="small">${getkey[i][6]}</div>
            </div>
        </figure>
    </div>`;
    }
    row+=`${key}
        <div class="row">
           ${tokeRow}
        </div>
    </div>`;
}
document.querySelector('.main-box').innerHTML=row;
