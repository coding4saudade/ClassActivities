// axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
//     response => {
//         console.log("get response", response.data)

//         document.getElementById("output").innerText = response.data.title
//     }
// ).catch(err => console.error("error", err))

// axios.get("https://jsonplaceholder.typicode.com/posts/").then(
//     response => {
//         const firstFive = response.data.slice(0 , 5);
//         //console.log(firstFive)
//          //firstFive.forEach(post => document.getElementById("output2").innerText = response.data.title)
//         firstFive.map( post => document.getElementById("output2").innerText = post.title) 
//     }
// )

//make the request
axios.get("https://jsonplaceholder.typicode.com/users/").then(
    
//receive the response    
    response => {
    //grab response data in this case user.name
        const user = response.data.map(user => user.name )
    //select the ul from HTML using the id of "usernames"    
        const list = document.getElementById("usernames")
    //use a forEach to take each name and create a list item element    
        user.forEach(name => {
            const li = document.createElement("li")
            li.textContent = name
     //to dynamically display response data       
            list.appendChild(li)
        });



    }
)




document.getElementById("getRobot").addEventListener("click", () => {
    const robotName = `robot-${Math.random() * 1000}`
    const imageURL = `https://robohash.org/${robotName}`;

    axios.get(imageURL, { responseType: "blob" }).then(response => {
        const blob = response.data;
        const imageObjectURL = URL.createObjectURL(blob)
        
        const image = document.createElement("img")

        image.src = imageObjectURL;
        image.width = 400

        const container = document.getElementById("robot")
        container.innerHTML = "";
        container.append(image);
        
        
        console.log(blob);
    });
});
