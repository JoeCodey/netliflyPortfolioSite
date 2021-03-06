

import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import IndivProject from './IndivProject.js'
import LanguageBreakdownBar from './languageBreakdownBar.js'


function getLanaguageRatio(uri_gitAPI, owner, repo_name){
    const langRatios = {};
    
    return (
        
    <Get url={uri_gitAPI+`/repos/${owner}/${repo_name}/languages`}>
        {(error, response, isLoading, makeRequest, axios) => {
        if(error) {
           
        return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
        }
        else if(isLoading) {
            
        return (<div>Loading...</div>)
        }
        else if(response !== null){
            let totalBytes = 0 

            Object.values(response.data).forEach(value=>{
                totalBytes += value ; 
            })
            Object.keys(response.data).forEach(key=>{
                langRatios[key] = (parseFloat((response.data[key] / totalBytes *100).toFixed(0)))
            })
            //  console.log("Original Data");
            //  console.log(response.data);
            //  console.log("rattio");
            //  console.log(langRatios)
             if (! Object.entries(langRatios).length > 0){
                return null 
             }

            
             return <div> <LanguageBreakdownBar ratios= {langRatios} /> </div>
            
        }
        return (<div>Default message before request is made.</div>)
    }}

    </Get>
    );
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
            //console.log(response.data)
                
            {/**
                Push projects with arduino and datascience in repositiory titile 
                to the top of the project list.     
            */}
            
            for(let i=0 ; i <response.data.length ; i++){
                if(priority_projects.honours.test(response.data[i].name)){
                    
                    
                
                    //force Honours project to be 3rd in list 
                    let temp = response.data[3] ; //save current project in 4th position of website
                    response.data[3] = response.data[i] ;
                    response.data[i] = temp ; 
                }
                //console.log(`${response.data[i].name} : ${response.data[i].fork}` );
                //console.log(`${response.data[i].name} : ${priority_projects.arduinoprojects.test(response.data[i].name)}` );

            }
            

            //response.data.sort( (repo1,repo2)=> ( priority_projects.arduinoprojects.test(repo1.name) || priority_projects.honours.test(repo1.name)  ? -1: 1)) ;     
        

            // for(let i=0 ; i <response.data.length ; i++){
            //     // Print output of project sorting 
            //     console.log(`${response.data[i].name} : ` );

            // }
            
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
                if(response.data[i].fork){
                    // skip forked repos
                    // console.log("forked repo skipped")
                    continue;
                }


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

export default {githubAPI_GET_Projects, getLanaguageRatio} 