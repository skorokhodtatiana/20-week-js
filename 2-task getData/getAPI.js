fetch('https://api.github.com/users/indutny')

.then(responce => responce.json())
.then(user => 
    {
        document.getElementById('login').innerHTML = user.login;
        document.getElementById('nameUser').innerHTML = user.name;
        console.log(user);
        document.getElementById('avatar').src = user.avatar_url;
        document.getElementById('biography').innerHTML = user.bio;
         document.getElementById('linkBlog').setAttribute("href", "http://darksi.de/");
        document.getElementById('followers').innerHTML = user.followers;
        document.getElementById('location').innerHTML = user.location;
        document.getElementById('repos').innerHTML = user.public_repos;
    })
.catch(err => console.log(err));