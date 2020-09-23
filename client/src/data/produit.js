
const URL = "http://localhost:8080/"
export  function allProduct(){
 
    return fetch(`${URL}`)
        .then(res => res.json()) //.json
        
  
  }
export  function soccerBall() {
    return fetch(`${URL}categories/ballon`)
        .then(res => res.json()) //.json
        
  
  }
  
  export function allShirts(){

    return fetch(`${URL}categories/maillot`)
    .then(res=>res.json())
  }
  export function ascending() {
    return fetch(`${URL}order/ascending/`, {
      
    }).then((res) => res.json());
  }
  export function descendingOrder() {
    return fetch(`${URL}order/descending/`, {

    }).then((res) => res.json());
  }

  // format des donnees recu
// [
//     {
//         id: '0',
//         photo: realD,
//         name: 'maillot real madrid',
//         description:'domicile',
//         price:"90€",
//         isPromo:false,
//         newPrice:"",
//         marque:"addidas",
//         logo:addidas
        
//     },
//     {
//         id: '1',
//         photo: realE2,
//         name: 'maillot real madrid',
//         description: "exterieur",
//         price:"90€",
//         isPromo:false,
//         newPrice:"",
//         marque:"addidas",
//         logo:addidas
//     }]


