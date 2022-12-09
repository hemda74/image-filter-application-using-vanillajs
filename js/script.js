let sat=document.getElementById("saturate");
let cont=document.getElementById("contrast");
let bright=document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let grays=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hue=document.getElementById("hue-rotate");
let upload=document.getElementById("upload")
let download=document.getElementById("download");
let image=document.getElementById("img");
let reset=document.querySelector('span');
let imagebox=document.querySelector('.img-box');
const canvas=document.getElementById("canvas1");
let ctx=canvas1.getContext('2d')
function resetval(){
    image.style.filter='none';
    sat.value='100';
    cont.value='100';
    bright.value='100';
    sepia.value='0';
    blur.value='0';
    hue.value='0';
    grays.value='0';
}
window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imagebox.style.display='none';
}
upload.onchange=function(){
    resetval();
    download.style.display='block';
    reset.style.display='block';
    imagebox.style.display='block';
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
            image.src=file.result;
    }
    image.onload=function(){
        canvas.width=image.width;
        canvas.height=image.height;
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
        image.style.display='none';
    }
}
let filters=document.querySelectorAll("ul li input");
filters.forEach(filter=>{
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${sat.value}%)
        contrast(${cont.value}%)
        brightness(${bright.value}%)
        sepia(${sepia.value}%)
        grayscale(${grays.value})
        blur(${blur.value}px)
        hue-rotate(${hue.value}deg)
        `
        ctx.drawImage(image,0,0,canvas.width,canvas.height);
    })
})
download.onclick=function(){
    download.href=canvas.toDataURL();
}
