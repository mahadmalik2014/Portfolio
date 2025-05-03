function Send(){
    var info={
        name:document.getElementById("name").value,
     email:document.getElementById("email").value,
     subject:document.getElementById("subject").value,
     message:document.getElementById("message").value
    }


const serviceid="service_y6ooz12"

const templateid="template_pvykasr"

emailjs.send(serviceid,templateid,info)
.then(
    res=>{
        document.getElementById.apply("name").value=""
        document.getElementById.apply("email").value=""
        document.getElementById.apply("subject").value=""
        document.getElementById.apply("message").value=""
        console.log(res)
        alert("Your message has been successfully sent!")
    }
).catch((err)=>console.log(err))
}