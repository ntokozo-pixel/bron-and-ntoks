var arr = [
  { dp: "https://shorturl.at/vR024",
  story:"https://shorturl.at/dmKQR" },
  { dp: "https://i.pinimg.com/564x/1c/24/a2/1c24a2b335cd9e569a4bfb8aa28db7ab.jpg",
  story:"https://i.pinimg.com/564x/1c/24/a2/1c24a2b335cd9e569a4bfb8aa28db7ab.jpg" },
  { dp: "https://i.pinimg.com/236x/6d/28/d4/6d28d457c6ba3c58f7fe97c08d64d041.jpg",
  story:"https://i.pinimg.com/564x/a4/c6/4e/a4c64e3a809813a812ea34b5171f7161.jpg" },
  { dp: "https://i.pinimg.com/564x/d9/03/cc/d903ccd21a9de7ef9cd4fea9e0a53f91.jpg",
  story:"https://i.pinimg.com/564x/d9/03/cc/d903ccd21a9de7ef9cd4fea9e0a53f91.jpg" },
  { dp: "https://i.pinimg.com/564x/14/d4/bd/14d4bd64f701e16473ecee37dc515d4c.jpg",
  story:"https://i.pinimg.com/564x/14/d4/bd/14d4bd64f701e16473ecee37dc515d4c.jpg" },
  { dp: "https://i.pinimg.com/236x/0e/3c/32/0e3c32fadb047743702e61878664f1bc.jpg",
  story:"https://i.pinimg.com/564x/45/fa/9d/45fa9d8782937aa40774171075bcf045.jpg" },
  { dp: "https://i.pinimg.com/236x/8a/f1/a5/8af1a5da0fd920a5503b846adc162925.jpg",
  story:"https://i.pinimg.com/236x/76/d2/56/76d256f86ca2bef3a2b70ca8a1923d9c.jpg" },
  { dp: "https://i.pinimg.com/236x/19/ab/88/19ab887645191d84cb4d77ec41b3b9ca.jpg",
  story:"https://i.pinimg.com/236x/49/d1/b7/49d1b7bfc76496c3ecea8b635a1a6d8b.jpg" },
  { dp: "https://i.pinimg.com/236x/29/f5/5b/29f55b682c389c2975e51fa06c0f4287.jpg",
  story:"https://i.pinimg.com/236x/70/98/2a/70982acb91fe7dbb5ef51626b0da793e.jpg" },
];

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function (elem,idx) {
    clutter += `<div class = "story">
    <img id="${idx}" src="${elem.dp}" alt= "">
    </div>`
});
storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display ="none"
    },3000)
});