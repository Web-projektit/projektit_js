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

let fetch_get = (url,id) => {
    if (id) url = url + "/" + id
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    }

var nimi = "matti";

let isoalkukirjain = merkkijono => {
let alku = merkkijono.charAt(0).toUpperCase();
let loppu = merkkijono.slice(1);
return alku + loppu;
}

console.log("nimi:", isoalkukirjain(nimi));
