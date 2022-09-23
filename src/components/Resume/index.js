import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Jackson Petz</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">


                <p class="mt-5">
                <a href="https://www.linkedin.com/in/jackson-petz-0ab97619b/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Jackson Petz LinkedIn"/></a>
                </p>
                <p>
                Download my full <a href="!#" class="link">Resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front End experience</h2>
                <p>HTML, CSS (Bootstrap, Foundation, Bulma), JavaScript, jQuery, React.js</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back End experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL, postgreSQL), Sequelize, NoSQL (MongoDB, Mongoose), Python, Django, API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;