function btn(){
    var getInp = document.getElementById('inp')
        fetch(`https://api.github.com/users/${getInp.value}`)
        .then(function(data) {
            return data.json()
            
        })
    
        .then(function(data){
            var sho= document.getElementById('show')
            sho.innerHTML += `
            <div class=" m-3 card d-flex" style="width: 22rem;border: 5px solid black">
      <img class="card-img-top" src=${data.avatar_url} alt="Card image cap"><hr>
      <div class="card-body">
        <h5 class="card-title"> Name :  ${data.name}</h5>
        <div class="card-text">Bio : ${data.bio ? data.bio : ' Bio data are not Available '} </div>
        <div class="card-text"> Followers : ${data.followers} </div>
        <div class="card-text">Followings : ${data.following} </div>
     
      <div class="card-body">
        
        <a  target = '_blank' href=${data.html_url} class="card-link">Go to Page</a>
      </div>
    </div>`
    getInp.value = ''
     
        })
        .catch(function(err) {
            console.log(err)
        })
    }