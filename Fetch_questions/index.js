button=document.getElementById('fetch_details');
main_div=document.getElementById("main_container")
button.addEventListener('click',function(){
   fetch('https://reqres.in/api/users').then(function(data)
   {
    return data.json()
   }).then(function(result){
    console.log(result.data);
    displayUserData(result.data)
   })
})
function displayUserData(data){
    data.forEach(element => {
        let container=document.createElement('div')
        let image=document.createElement('img')
        image.src=element.avatar

        let email_id=document.createElement('p')
        email_id.textContent="Email-Id: "+ element.email

        let person_id=document.createElement('p')
        person_id.textContent="Id: "+ element.id

        let name=document.createElement('p')
        name.textContent="Name: "+element.first_name+" "+element.last_name

        container.append(image,name,person_id,email_id)
        main_div.append(container)
    });
}