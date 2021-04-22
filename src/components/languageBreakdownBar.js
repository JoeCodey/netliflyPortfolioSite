import React, {Component} from 'react';
import {useState,useEffect} from 'react' ;
import "./languageBreakdown.css" ;

const LanguageBreakdownBar = ({ratios}) => {
    var arr_langRatio = Object.entries(ratios) ;
    
    const languageColours = (language) =>{
        switch (language) {
            case 'Python': 
                return ' w3-yellow'
                break;
            case 'C++': 
                return ' w3-light-blue'
                break;
            case 'JavaScript':
                return ' w3-light-green'
                break ;
            case 'JavaScript':
                return ' w3-green'
                break ;
            case 'HTML':
                return ' w3-orange'
                break ; 
            case 'C':
                return ' w3-indigo'
                break ; 
            case 'CSS':
                return ' w3-blue'
                break ;
            default:
                return ' w3-grey'
                break;
        }
    }


    function generateLengend(){
        let legendItems = []
       
            Object.keys(ratios).forEach(key=>{
                legendItems.push(<span className={"w3-tag w3-padding w3-tiny "+languageColours(key)} >{key}</span>)
            })
    
        return(<div style={{paddingBottom: '8px'}}> {legendItems} </div> )
        
    }

    function generateProgressBar(){
            let eachLangRatio = []

            Object.keys(ratios).forEach(key=>{
                eachLangRatio.push(
                <span className={"Progress-item w3-container w3-center w3-tiny " + languageColours(key)} aria-label="C++" 
                style={{backgroundColor: languageColours(key), width: ratios[key] +'%',padding: '2px'}}>

                    {ratios[key] > 3 && ratios[key]+'%'}  
                    
                </span>
                )
            })

            return(
                <span className={"Progress"}>
                     {eachLangRatio}
                </span> )
    }


    return ( <div>
                 
                        {generateProgressBar()}
                        {generateLengend()}
        {/* <span className={"Progress"}>ls

            <span className={"Progress-item w3-yellow w3-container w3-center w3-tiny"} aria-label="Python" style={{backgroundColor: languageColours("Python"), height: '14px',width:'75%'}}>
                    Python
            </span>
            <span className={"Progress-item w3-blue w3-container w3-center w3-tiny "} aria-label="C++" style={{backgroundColor: languageColours("Python"), width:'15%'}}>
                
            </span>
            <span className={"Progress-item w3-green w3-container w3-center w3-tiny "} aria-label="Javascript" style={{backgroundColor: languageColours("Python"), width:'15%'}}>
                
            </span>

    </span> */}
          </div>
    )
}

export default LanguageBreakdownBar ; 


