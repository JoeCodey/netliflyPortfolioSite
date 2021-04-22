import React, {Component} from 'react' ; 
import ReactMarkdown from "react-markdown" ; 
import gitAPI from './gitAPI.js' ; 
import LanguageBreakdownBar from './languageBreakdownBar.js'
const baseURL = 'https://api.github.com' ;
const gitUsername = 'JoeCodey' ;

class IndivProject extends React.Component{

    constructor(props){
        super(props);

        this.props = {
            language : '' , 
            description: '',
            svn_url: '' 
        }
        this.state = {

            langRatios : this.getLanguageBreakdown()
        }

    }

   renderMarkdown(data) {
        return(
        <ReactMarkdown>{this.props.description}</ReactMarkdown>
        )
    }
    getLanguageBreakdown(){
          
          return gitAPI.getLanaguageRatio(baseURL,gitUsername,this.props.name)
        
    }
    render (){
        return(
            <div class="git-repo"> 
            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div id={this.props.name} class="resume-content">
                <h3 class="mb-0">{this.props.name}</h3>
                    <div class="subheading mb-3">{this.props.language}</div>
                    {this.renderMarkdown()}
                    {gitAPI.getLanaguageRatio(baseURL,gitUsername,this.props.name)}     
                </div>
                <div class="resume-date text-md-right">
                <span class="text-primary"><a href={this.props.svn_url} target="_blank">See more detail on Github! <i class="fab fa-github"> </i> </a></span>
                </div>
            </div>
        </div> 
        );
    }

}

export default IndivProject ; 