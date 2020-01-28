//const request = require('request') ;
const axios = require('axios') ;

const fs = require('fs') ;


var baseURL = 'https://api.github.com' ;
var gitUsername = 'JoeCodey' ;



// var retriveListProjects = () => {
//   request(`https://api.github.com/users/${username}`,
//     (request,response,body) => {
//       return
//
//   });
// };


var getListOfRepos = (user) =>{
  //GitHub Api Docs List Public Repos --> GET /users/:username/repos
  return axios.get(baseURL+`/users/${user}/repos?sort=updated`)

  // .then((response)=>{
  //   // console.log(response) ;
  //
  //   var namesOfRepos  = [];
  //   for(let i = 0; i < response.data.length ; i ++){
  //     console.log(response.data[i]);
  //     namesOfRepos.push(response.data[i].name) ;
  //   }
  //   //console.log(JSON.stringify(response.data,undefined,2)) ;
  //   fs.writeFile('reposResponse.log',response.data, (err) =>{
  //   if(err){
  //     console.log('Unable to append to log');
  //   }
  // });
  //   //console.log(namesOfRepos.toString()) ;
  //   return namesOfRepos ;
  //
  // }).catch((e)=>{
  //
  //   console.log(e.message)
  // });
} ;



// var getUottaHack = (repo_owner) => {
//   return axios.get(baseURL + )
// };

module.exports = {getListOfRepos , gitUsername, getSpecificRepo, specific_repos } ;

// console.log(module) ;
