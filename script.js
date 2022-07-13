function getGender() {
 
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
       
               return ele[i].value;
    }
}

function getmarkedCheckbox(){
    var checkboxes = document.getElementsByName('experience');
    for (var checkbox of checkboxes)
    {
        if (checkbox.checked) {
            return checkbox.value ;
            // console.log(checkbox.value )
        }
    }
}


function postData(){
    let firstname = document.getElementById("firstname").value;
let lastname = document.getElementById("lastname").value;
let mail = document.getElementById("mailid").value;
let birthday = document.getElementById("birthday").value;

let experience = document.getElementById("experience").value;
let youarea = getmarkedCheckbox();

let gender = getGender();
    let employ_record = new Array();
    employ_record= JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")): [];
    employ_record.push(
        {
            "fname":firstname,
            "lname":lastname,
            "mailid":mail,
            "dob":birthday,
            "gender":gender,
            "exeperience":youarea,
            "howMuchExperience":experience
        }
    )
// console.log(firstname,lastname,mail,birthday,gender,experience)

    localStorage.setItem("users",JSON.stringify(employ_record));
    location.reload();
    
}

let getuserData = JSON.parse(localStorage.getItem("users"));
function showuserData(){
    let tabledata = document.getElementById("table");
    getuserData.forEach((userinfo) => {
        let tr = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = userinfo.fname+" "+userinfo.lname;
        let mailid = document.createElement("td");
        mailid.innerHTML = userinfo.mailid;
        let dob  =   document.createElement("td");
        dob.innerHTML=userinfo.dob;
        let gender = document.createElement("td");
        gender.innerHTML = userinfo.gender;
        let experience = document.createElement("td");
        experience.innerHTML= userinfo.howMuchExperience;

        let youarea = document.createElement("td");
        youarea.innerHTML= userinfo.exeperience;

        
        let deletebtn = document.createElement("td");
        deletebtn.innerHTML = "Delete";
        deletebtn.id = "delete_btn"
        tr.append(name,mailid,dob,gender,youarea,experience,deletebtn);
        tabledata.append(tr);

        deletebtn.onclick = function () {
           removetheuser(event, userinfo)
          };
        //   location.reload();
    })


    function removetheuser(e, prod) {
    
        e.preventDefault();
        var newprods = getuserData.filter(function (p) {
          if (p != prod) {
            return p;
          }
        });
        localStorage.removeItem("users");
    
        localStorage.setItem("users", JSON.stringify(newprods));
        location.reload();
      }

      
}


showuserData()
