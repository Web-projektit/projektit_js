    const taulukotjaobjektit = document.querySelector('#listat');
    taulukko1 = ["a", "b", "c"]
    taulukko2 = ["d", "e", "f"]
    objekti1 = {"a": "1", "b": "2", "c": "3"}
    objekti2 = {"d": "4", "e": "5", "f": "6"}
    let laskuri = 1;
    /* lista.map(alkio => {}) 
       lista.filter(alkio => {}) 
       lista.reduce(myFunction) 
    */

    let isArray = myArray => myArray.constructor === Array;

    let taulukko = (alkio,ul) => {
        console.log(alkio);
        let li = document.createElement('li');
        li.innerHTML = `<span>${alkio}</span>`;
        ul.append(li);
        }

    let objekti = (alkio,arvo,ul) => {
        console.log(alkio);
        let li = document.createElement('li');
        li.innerHTML = `<span>${alkio}: ${arvo}</span>`;
        ul.append(li);
        }    

    let listaus = (...listat) => {  
        listat.forEach(lista => {
            console.log(lista);
            let h3 = document.createElement('h3');
            h3.innerHTML = `Lista ${laskuri++}`;
            taulukotjaobjektit.append(h3);
            let ul = document.createElement('ol');
            taulukotjaobjektit.append(ul);
            if (isArray(lista)) {
                lista.map(alkio => taulukko(alkio,ul))
                }
            else if (typeof lista === 'object') {
                /*Object.keys(lista).forEach(alkio => {
                    console.log(alkio);
                    let li = document.createElement('li');
                    li.innerHTML = `<span>${alkio}: ${lista[alkio]}</span>`;
                    ul.append(li);
                    });*/
                Object.keys(lista).map(alkio => objekti(alkio,lista[alkio],ul));     
                }
            })    
        }
    
    listaus(taulukko1, taulukko2, objekti1, objekti2);   



    