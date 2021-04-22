import React, {Component} from 'react' ;  
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import ReactMarkdown from "react-markdown" ; 
import IndivProject from './IndivProject.js'
import gitAPI from './gitAPI.js'
import {render} from 'react-dom' ;
const fs = require('fs') ;

  var baseURL = 'https://api.github.com' ;
  var gitUsername = 'JoeCodey' ;



class ProjectList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
        <div class="project-list">
            <hr class="m-0"/>

            <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
                <div class="w-100">
                  <h2 class="mb-5">Projects</h2>

                {gitAPI.githubAPI_GET_Projects(baseURL,gitUsername)}
                    
              </div>
              

            </section>
             {/* <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" >
                    <div class="w-100">
                                <h2 class="mb-5"> Forked for Research</h2>

                                {githubAPI_GET_Projects(baseURL,gitUsername)}
                                    
                            </div>
            </section>  */}
            </div> 
        );
        }
    

}

export default ProjectList ; 
