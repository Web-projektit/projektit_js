/* 
   CRUD: create, read, update, delete
   REST API: POST, GET, PUT, DELETE 
   url = "http://localhost:3000/notes"
   fetch(url, {method: "POST", body: data})
   fetch(url, {method: "GET"})
   fetch(url, {method: "PUT", body: data})
   fetch(url, {method: "PATCH", body: data})
   fetch(url, {method: "DELETE"})
   axios.post(url, data)
   axios.get(url)
   axios.put(url, data)
   axios.patch(url, data)
   axios.delete(url) 
*/

/* Pohdintaa: miksi tässä ei tarvita async/await -rakennetta? */
let haeresponse = response => {
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('404 ei löydy');
            }
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

let fetch_get = (url,id) => {
    if (id) url = url + "/" + id
    fetch(url)
    .then(response => haeresponse(response))
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }

let fetch_post = (url,rivi) => {
    fetch(
        url,{
        body: JSON.stringify(rivi), 
        method: "POST", 
        headers: { "Content-type": "application/json ; charset=UTF-8" }
        })
    .then(response => haeresponse(response))
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }
    
let fetch_put = (url,rivi,id) => {
    url = url + "/" + id
    fetch(
        url,{
        body: JSON.stringify(rivi), 
        method: "PUT", 
        headers: { "Content-type": "application/json ; charset=UTF-8" }
        })
    .then(response => haeresponse(response))
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }

let fetch_patch = (url,rivi,id) => {
    url = url + "/" + id
    fetch(
        url,{
        body: JSON.stringify(rivi), 
        method: "PATCH", 
        headers: { "Content-type": "application/json ; charset=UTF-8" }
        })
    .then(response => haeresponse(response))
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }
    
let fetch_delete = (url,id) => {
    if (id) url = url + "/" + id
    console.log("fetch_delete: ",url)
    fetch(
        url,{
        body: JSON.stringify(rivi), 
        method: "DELETE", 
        headers: { "Content-type": "application/json" }
        })
    .then(response => haeresponse(response))
    .then(data => console.log(data))
    .catch(error => console.error("Virhe: ",error))
    }
    
let url = "http://localhost:3000/notes"
let id = 1
let rivi = {"content": "Ohjelmointi on tosi kivaa", "important": false}
let muutos = {"important": true}

/* fetch_get(url,id) 
fetch_post(url,rivi) 
fetch_put(url,rivi,4) 
fetch_patch(url,muutos,4) 
fetch_delete(url,4) */

let async_get = async (url,id) => {
    if (id) url = url + "/" + id
    try {
        const response = await fetch(url)
        const data = await haeresponse(response)
        console.log("async_get:",data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

let async_post = async (url,rivi) => {
    try {
        const response = await fetch(url,{
            body: JSON.stringify(rivi), 
            method: "POST", 
            headers: { "Content-type": "application/json ; charset=UTF-8" }
            })
        const data = await haeresponse(response)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

let async_put = async (url,rivi,id) => {
    url = url + "/" + id
    try {
        const response = await fetch(url,{
            body: JSON.stringify(rivi), 
            method: "PUT", 
            headers: { "Content-type": "application/json ; charset=UTF-8" }
            })
        const data = await haeresponse(response)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

let async_patch = async (url,rivi,id) => {
    url = url + "/" + id
    try {
        const response = await fetch(url,{
            body: JSON.stringify(rivi), 
            method: "PATCH", 
            headers: { "Content-type": "application/json ; charset=UTF-8" }
            })
        const data = await haeresponse(response)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}


let async_delete = async (url,id) => {
    if (id) url = url + "/" + id
    try {
        const response = await fetch(url,{
            body: JSON.stringify(rivi), 
            method: "DELETE", 
            headers: { "Content-type": "application/json" }
            })
        const data = await haeresponse(response)
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
        return []
    }
}

// async_get(url)

// Määritellään funktio datan näyttämiseen
let displayData = async () => {
    const data = await async_get(url)
    const list = document.querySelector('#lista')
    list.innerHTML = '';
    data.forEach(item => {
        const listItem = document.createElement('li');  
        const span = document.createElement('span')
        span.textContent = item.content; 
        listItem.appendChild(span);
        
        const editIcon = document.createElement('span');
        editIcon.addEventListener('click', e => {
            e.target.previousSibling.contentEditable = true;
            })
        editIcon.innerHTML = '<i class="fa fa-edit"></i>'
        listItem.appendChild(editIcon);
    
        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete');
        deleteIcon.addEventListener('click', () => {
            async_delete(url, item.id)
            displayData()
            })
        deleteIcon.innerHTML = '<i class="fa fa-trash"></i>'
        listItem.appendChild(deleteIcon);
        
        list.appendChild(listItem);
        })
}

// Kutsutaan displayData-funktiota, kun sivu on valmis
displayData();
