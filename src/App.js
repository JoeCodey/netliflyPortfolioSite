import React from 'react';
import './App.css';
import './components/projectList.js' ;
import ProjectList from './components/projectList.js';

function App() {
  return (
<div className="App">
{/* <!-- Custom fonts for this template --> */}
      <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet"/>
      <link href="./vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>

      {/* <!-- Custom styles for this template --> */}
      <link href="./css/resume.min.css" rel="stylesheet"/>

    
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <span class="d-block d-lg-none">Joseph LeFebvre</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
      </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#experience">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
        </li>
        
       <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
        </li> 
       
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
        <h1 class="mb-0">Joseph
          <span class="text-primary">LeFebvre</span>
        </h1>
        <div class="subheading mb-5">Ottawa, Ontario
          <div class="subheading mb-6"> Email:
              <a href="mailto:name@email.com"> joseph10005@gmail.com </a>
          </div>
        </div>

        <p class="lead mb-5">Seeking exciting and fulfilling opportunities to start my career, and to contribute to the development of successful, innovative and creative technologies that make an impact on how people live and work.</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/joseph-lefebvre123/">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/JoeCodey">
            <i class="fab fa-github"></i>
          </a>
          {/* 
          <!-- <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a> --> */}
        </div>
      </div>
    </section>
    

    <ProjectList />


   
{/** 
    <hr class="m-0">

<section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">


    <div class="w-100">
      <h2 class="mb-5">Projects</h2>


    {{#each repoInfo}}


        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="resume-content">

            <h3 class="mb-0">{{name}}</h3>
              <div class="subheading mb-3">{{language}}</div>

            <p>{{description}}</p>

          </div>
          <div class="resume-date text-md-right">
            <span class="text-primary"><a href={{svn_url}}>See more detail on Github! <i class="fab fa-github"> </i> </a></span>
          </div>
        </div>

    {{/each}}


  </div>

</section>
 */}

<hr class="m-0"/>

<section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
  <div class="w-100">
    <h2 class="mb-5">Education</h2>

    <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
      <div class="resume-content">
        <h3 class="mb-0">University of Ottawa</h3>
        <div class="subheading mb-3">Bachelor of Science</div>
        <div>Specialization in Computer Science - Management and Entrepreneurship</div>
        <p>CGPA: 7.85</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">September 2013 - May 2018</span>
      </div>
    </div>

  </div>
</section>

<hr class="m-0"/>

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div class="w-100">
        <h2 class="mb-5">Skills</h2>

        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul class="list-inline dev-icons">
          <li class="list-inline-item">
            <i class="devicon-cplusplus-plain colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-python-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-java-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-linux-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-git-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-heroku-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-javascript-plain-wordmark colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-nodejs-plain colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-npm-plain colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-html5-plain colored"></i>
          </li>
          <li class="list-inline-item">
            <i class="devicon-css3-plain colored"></i>
          </li>
        </ul>
      </div>
    </section>

    <hr class="m-0"/>

    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div class="w-100">
        <h2 class="mb-5">Interests</h2>
        <p>Outside of computer science, I enjoy outdoor activites. I am an avid golfer, I made a trip to see the 2016 US open, and I have been a member of Executive Golf Ottawa for three years. </p>
        <p class="mb-0"></p>
      </div>
    </section>

    <hr class="m-0"/>

    </div>



  {/** closing body tag for all resume components (project, education ...) */}
  
  
    
</div>
  );
}

export default App;
