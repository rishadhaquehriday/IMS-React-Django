# Information Management System ( IMS )
*A web-based user management application incorporating CRUD operations has been created utilizing Django, DRF and React JS.*
## Requirements
Ensure that both Python and Node.js are installed on your system
- [Python version 3.9.13](https://www.python.org/downloads/release/python-3913/)
- [Node version 16.7.1](https://nodejs.org/en/blog/release/v16.7.1/)

## Project Setup
- Clone the repository in a local folder  
 
    `git clone https://github.com/rishadhaquehriday/IMS-React-Django.git`
- Open terminal and verify python version  

    `python --version`
- Verify if node and npm are installed  

    `node --version`  
    `npm --version`
    
## Setup Backend
- Navigate to cloned project directory
  
  `cd IMS-React-Django`
  
- Create a python virtual environment for backend  

  `python -m venv env`
  
- Activate the virtual environmen
  
  `env\Scripts\activate`
  
- Install python libraries 

  `cd backend`  
  `pip install -r requirements.txt`
  
- Start Django server
  
  ` python manage.py runserver`
  
- Django backend server will start on http://localhost:8000/ 


## Setup Frontend
- Open a new terminal and navigate to frontend directory
  
  `cd IMS-React-Django/frontend`
  
- Install frontend libraries using npm  

  ` npm install`
  
- Start Node server
  
  ` npm start`
  
 - Once node is started you can access the application on http://localhost:3000/
  
  
