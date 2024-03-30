

//play btn code format function
var ply = document.getElementById("ply_icn");
ply.onclick= function(){

    var pla = document.getElementById("ply_icn");
    var pau = document.getElementById("pau_icn");
    var vid = document.getElementById("video");

    //if condtion
    if(pla.style.display="none"){

        vid.play();
        pau.style.display="block";
    }
}


//pause btn code format function
var pse = document.getElementById("pau_icn");
pse.onclick= function(){

   var jaan = document.getElementById("ply_icn");
    var love = document.getElementById("pau_icn");
    var vdo = document.getElementById("video");

    //if condtion
    if(love.style.display="none"){

        vdo.pause();
        jaan.style.display="block";
        
    }
}



//left block code function format

var lft = document.getElementById("rgt_btn");
lft.onclick= function(){

    var open = document.getElementById("main_box");
    var close = document.getElementById("box_one");

    //if condtion
    if(open.style.display="none"){

        close.style.display="block";
    }
    
}



//app close function code
var clse = document.getElementById("lft_btn");
clse.onclick= function(){

    window.close();
}



//code for driect go to video function

var driect = document.getElementById("feature");
driect.onclick= function(){

    var base = document.getElementById("main_box");
    var vid_ply = document.getElementById("box_one");

    //if condtion
    if(vid_ply.style.display="none"){

        base.style.display="block";
    }
}




//video main function code start with condtion

var main = document.getElementById("upld");
main.onchange=function(){


    var read = new FileReader();
    read.readAsDataURL(main.files[0]);

   read.onload=function(){

        var file_vd = read.result;
    
        var vid_main= document.getElementById("video");
        vid_main.src=file_vd;

        //if condtion format

        if(vid_main.src != ""){

            var base = document.getElementById("main_box");
             var vid_ply = document.getElementById("box_one");

             base.style.display="block";
            vid_ply.style.display="none";
        }
   }


}




//github btn code format
var  git = document.getElementById("git");
git.onclick=function(){

    window.location="https://github.com/zishanrayeen";
}


//linkdin btn code format
var linkdin = document.getElementById("link");
linkdin.onclick=function(){

    window.location="https://www.linkedin.com/in/zishan-rayeen-691715243";
}


//developer name
console.log("Developed By: Zishan Rayeen (SZ)");
