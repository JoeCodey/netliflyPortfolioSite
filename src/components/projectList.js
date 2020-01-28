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
                <span class="text-primary"><a href={this.props.svn_url}>See more detail on Github! <i class="fab fa-github"> </i> </a></span>
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

                  <Get url={baseURL+`/users/${gitUsername}/repos?sort=updated`}>
                            {(error, response, isLoading, makeRequest, axios) => {
                    if(error) {
                        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
                    }
                    else if(isLoading) {
                        return (<div>Loading...</div>)
                    }
                    else if(response !== null) {
                        {console.log(response.data)}

                        for (let i = 0 ; i < response.data.length ; i++){
                            response.data[i] = <IndivProject language={response.data[i].language}
                            name={response.data[i].name} 
                            description={response.data[i].description} 
                            svn_url={response.data[i].svn_url}  
                             /> ;
                        }
                        return (<div> {response.data} </div>)
                    }
                    return (<div>Default message before request is made.</div>)
                    }}
                  </Get>
           
               {/** creating indiviual instances of indivProject components */} 
                    
              </div>

            </section>
       
        </div> 
        );
        }
    

}

export default ProjectList ; 