import React, {Component} from 'react' ;  
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
const fs = require('fs') ;

var baseURL = 'https://api.github.com' ;
var gitUsername = 'JoeCodey' ;

class IndivProject extends React.Component{

    constructor(props){
        super(props);

        this.props = {
            language : '' , 
            description: '',
            svn_url: '' 
        }

    }
    render (){
        return(
            <div class="git-repo"> 
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div class="resume-content">

                <h3 class="mb-0">{this.props.name}</h3>
                    <div class="subheading mb-3">{this.props.language}</div>

                <p>{this.props.description}</p>

                </div>
                <div class="resume-date text-md-right">
                <span class="text-primary"><a href={this.props.svn_url} target="_blank">See more detail on Github! <i class="fab fa-github"> </i> </a></span>
                </div>
            </div>
        </div> 
        );
    }

}
class ProjectList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div class="project-list">
            <hr class="m-0"/>

            <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            
            
                <div class="w-100">
                  <h2 class="mb-5">Projects</h2>

                {githubAPI_GET_Projects(baseURL,gitUsername)}
                    
              </div>

            </section>
       
        </div> 
        );
        }
    

}

function githubAPI_GET_Projects(githubAPI_URL, username){ 
        {/** Asynchonous GET request via react-axios library which fetches most recent project list from gitAPI */}
            let priority_projects = {
                    arduinoprojects : /(A|a)+rdu/ ,
                    dataScience : / *D|date/ ,
                    honours: /Vehicle/ 
                };

        let projectList_array = [] ; 

        return(
        <Get url={githubAPI_URL+`/users/${username}/repos?sort=updated`}>
                    {(error, response, isLoading, makeRequest, axios) => {
                if(error) {
                return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                }
                else if(isLoading) {
                return (<div>Loading...</div>)
                }
                else if(response !== null) {
                {console.log(response.data)}

                {/**
                    Push projects with arduino and datascience in repositiory titile 
                    to the top of the project list.     
                */}
                
                for(let i=0 ; i <response.data.length ; i++){
                    console.log(`${response.data[i].name} : ${priority_projects.arduinoprojects.test(response.data[i].name)}` );

                }
            

                response.data.sort( (repo1,repo2)=> ( priority_projects.arduinoprojects.test(repo1.name) || priority_projects.honours.test(repo1.name)  ? -1: 1)) ;     
                
                
                // response.data.sort( (repo1,repo2)=> {
                    
                //     if( /C\+\+/.test(repo1.language) && /C\+\+/.test(repo2.language)){
                //          if(Date.parse(repo1.updated_at) > Date.parse(repo2.updated_at) ? -1 : 1 ); 
                //     } 
                // } ) ; 


                // response.data.sort( (repo1,repo2)=> {
                //     if( /C\+\+/.test(repo1.language) && /C\+\+/.test(repo2.language)){
                //         if( Date.parse(repo1.updated_at) > Date.parse(repo2.updated_at) ? 1 : -1 ) ; 
                //     }
                //     if( (priority_projects.arduinoprojects.test(repo1.name) || /C\+\+/.test(repo1.language) {


    
                //     }

                // }) ;                      


                for (let i = 0 ; i < response.data.length ; i++){
                    projectList_array.push(<IndivProject language={response.data[i].language} 
                    name={response.data[i].name} 
                    description={response.data[i].description} 
                    svn_url={response.data[i].svn_url}  
                    /> ) ; 
                }
                //JSX object containing all instance of IndivProject
                return (<div> {projectList_array} </div>)
                }
                return (<div>Default message before request is made.</div>)
                }}
        </Get>
        );

}

export default ProjectList ; 