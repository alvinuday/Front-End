
var counter = 1;

function clicked()
{



var container4 = document.getElementsByClassName("container4");
var new_para = document.createElement('div');
var deleted = document.createElement('button');
var breakline = document.createElement('hr');
deleted.innerHTML = "Delete" ;
/* deleted = 'blue'; */
deleted.className = "cancelbutton";
deleted.id = `${counter}` ;
new_para.id =`newcontainer ${counter}`;
new_para.className = "paras";


console.log(deleted.innerHTML);
new_para.innerText = 
`Expected Delivery Date: ${document.getElementById('expected').value} 
 Recieved Date: ${document.getElementById('received').value}
 Quantity Demanded: ${document.getElementById('quantity-demanded').value}
 Quantity Received: ${document.getElementById('quantity-received').value}
 Quantity Returned: ${document.getElementById('quantity-returned').value}
 
 `;
 
 container4[0].appendChild(new_para);
 container4[0].appendChild(deleted);
 container4[0].appendChild(breakline);
 deleted.onclick = function() {
    console.log("delete button works bitches!!");
    var dbutton = document.getElementById(deleted.id)
    var obj = document.getElementById(`newcontainer ${deleted.id}`);
        obj.remove();
        dbutton.remove();
        breakline.remove();
    }
 counter++;

}
function cleared(){
    document.getElementById('expected').value = '';
    document.getElementById('received').value = '';
    document.getElementById('quantity-demanded').value = '';
    document.getElementById('quantity-received').value = '';
    document.getElementById('quantity-returned').value = '';
    
}

