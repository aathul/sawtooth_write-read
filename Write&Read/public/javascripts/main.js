
function writemsg(){
    const data = document.getElementById('body1').value
    console.log(data);
    if (data.length==0){
        alert("Please enter the data")
    }
    else{
    $.post('/', {  write: data },'json');
    
}
}

function readmsg(){
    console.log('halo')
    $.post('/state',  (data,textStatus,jqXHR) =>{
        alert("your data is : "+data.balance)
        document.getElementById("body_1").innerHTML ="Your data is:" + "<br />" + data.balance; 
      },'json');
    
}