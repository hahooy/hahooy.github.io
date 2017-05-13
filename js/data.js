/* ------------------------------------
Data is stored in JSON objects. In this way
the website doesn't rely on DB and therefore
it can be hosted statically.
---------------------------------------- */


var resumeData = {
        bio: {
            name: "Yongzheng Huang",
            role: "Masters student majoring in Computer Science",
            contacts: {
                email: "huangyongzheng@wustl.edu",
                mobile: "(540) 239-8537",
                github: "https://github.com/hahooy",
                codepen: "https://codepen.io/hahooy",
                linkedin: "https://www.linkedin.com/in/yongzheng-huang",
                location: "St Louis",
                resume: "https://drive.google.com/file/d/0B1uHglPYIL0ydHVEanlaTlZER0k/view?usp=sharing"
            },
            bioPic: "images/me-circle.jpg",
            welcomeMessage: "Welcome to my website! " +
                            "I am a software development enthusiast with experience in " +
                            "full-stack web and iOS application development. I am also a machine " + 
                            "learning practitioner familiar with Bayesian methods and classical machine " +
                            "learning methods. I am currently " +
                            "living in St. Louis and pursuing my Computer Science Masters degree " +
                            "at Washington University in St Louis. You might " +
                            "find out what I've been up to on this website (only if I " +
                            "am diligent enough updating it, which usually is not the case :-).) ",
            lastUpdate: "05-12-2017"
        },


        stack: {
            // NOTE: A new category has to be added to this categories list before added to the skills.
            "categories": ["language", "mobile", "machine learning", "web front end", 
                            "web framework", "database", "server", "cloud",
                            "agile", "version control"],
            "proficiencies": ["Proficient", "Familiar", "Basic Understanding"],
            "skills": [
                {'category': 'language', 'proficiency': 'Proficient', 'technologies': ['Python', 'Java', 'JavaScript', 'Swift']},
                {'category': 'language', 'proficiency': 'Familiar', 'technologies': ['Matlab', 'C']},
                {'category': 'language', 'proficiency': 'Basic Understanding', 'technologies': ['PHP', 'C++', 'Standard ML']},
                {'category': 'web front end', 'proficiency': 'Proficient', 'technologies': ['HTML', 'CSS', 'Bootstrap', 'jQuery']},
                {'category': 'web front end', 'proficiency': 'Familiar', 'technologies': ['jade', 'handlebars']},
                {'category': 'web front end', 'proficiency': 'Basic Understanding', 'technologies': ['AngularJS', 'Knockout']},
                {'category': 'web framework', 'proficiency': 'Proficient', 'technologies': ['Django']},
                {'category': 'web framework', 'proficiency': 'Familiar', 'technologies': ['Node.js']},
                {'category': 'database', 'proficiency': 'Proficient', 'technologies': ['SQL', 'PostgreSQL']},
                {'category': 'database', 'proficiency': 'Familiar', 'technologies': ['DynamoDB', 'MySQL', 'Hadoop']},
                {'category': 'database', 'proficiency': 'Basic Understanding', 'technologies': ['Firebase', 'MongoDB']},
                {'category': 'server', 'proficiency': 'Proficient', 'technologies': []},
                {'category': 'server', 'proficiency': 'Familiar', 'technologies': ['Apache']},
                {'category': 'server', 'proficiency': 'Basic Understanding', 'technologies': []},
                {'category': 'cloud', 'proficiency': 'Proficient', 'technologies': ['EC2', 'CloudWatch', 'S3', 'boto']},
                {'category': 'cloud', 'proficiency': 'Familiar', 'technologies': ['Heroku']},
                {'category': 'mobile', 'proficiency': 'Proficient', 'technologies': ['iOS development in Swift']},
                {'category': 'machine learning', 'proficiency': 'Proficient', 'technologies': ['Gaussian Processes', 'SVM', 'Linear Regression', 'Logistic Regression', 'PCA']},
                {'category': 'machine learning', 'proficiency': 'Familiar', 'technologies': ['KNN', 'k-means', 'Autoencoder', 'ICA', 'Decision Tree', 'Neural Network']},
                {'category': 'agile', 'proficiency': 'Proficient', 'technologies': ['Scrum']},
                {'category': 'agile', 'proficiency': 'Familiar', 'technologies': ['Kanban']},
                {'category': 'version control', 'proficiency': 'Proficient', 'technologies': ['Git', 'Subversion']}
            ]
        },


        schools:
            [
                {
                    name: "WashU",
                    city: "St. Louis, MO",
                    degree: "M.S.",
                    majors: "Computer Science",
                    date: "Expected May 2017",
                    url: "https://wustl.edu",
                    description: ""
                },
                {
                    name: "Virginia Tech",
                    city: "Blacksburg, VA",
                    degree: "M.S.",
                    majors: "Chemistry",
                    date: "May 2015",
                    url: "https://www.vt.edu",
                    description: ""
                },
                {
                    name: "Chongqing University",
                    city: "Chongqing, China",
                    degree: "B.S.",
                    majors: "Applied Chemistry",
                    date: "June 2012",
                    url: "https://international.cqu.edu.cn",
                    description: ""
                }
            ],


        jobs:
            [
                {
                    employer: "Service Management Group",
                    website: "https://www.smg.com/",
                    title: "Software Engineering Intern",
                    location: "Boston, MA",
                    date: "Jun 2016 - Sep 2016",
                    description: "I worked as an intern at SMG's boston office, which is focusing on understanding customer behaviors using a big data solution. I was involved in a couple of projects and working collaboratively with senior software engineers in a fast paced, agile environment. I created new features to improve the back-end visit detection functionality for SurveyMini mobile app. I also developed web scrapers and used third-party APIs to mine the data we need for the backend system. To improve the reliability of back-end infrastructure, I was involved in debugging programs and developing utility scripts. I also implemented a dashboard web application to provide information to customer services."
                },
                {
                    employer: "Monsanto",
                    website: "https://www.monsanto.com/",
                    title: "IT Co-Op",
                    location: "St. Louis, MO",
                    date: "Jan 2016 - May 2016",
                    description: "I was working on the enterprise identity management team in Monsanto. One major project that I worked on was to develope a node.js based web application for employees' information lookup. I made significant contribution to the project and pushed the app to beta test stage by the time I left. A JavaScript library we developed for this app was published to npm as an open source package. Another project I worked on was to migrate employees to a multi-factor authentication system. I implemented a Java program to automate the migration process (if I could do this over again I would develope it in a scripting language like Python...)."
                },
                {
                    employer: "Virginia Tech",
                    website: "https://www.vt.edu/",
                    title: "Teaching Assistant",
                    location: "Blacksburg, VA",
                    date: "Aug 2013 - May 2015",
                    description: "Gave lectures to undergraduate students in General Chemistry lab and Physical Chemistry lab."
                }
            ],


        projects:
            [
                {
                    title: "Connect STL",
                    dates: "2017",
                    description: "Connect STL is an iOS app that displays the real-time bus location and scheduled departure time for all Metro buses in St. Louis. It also provides real-time departure prediction for the Green Line bus. Connect STL has an interactive and intuitive user interface. You can see the location of the bus stops, the routes and the location of the buses on an interactive map. The locations of the buses are updated in real time on the map. You can touch on the bus stops to get scheduled departure time and a real-time estimation about how long it takes for the bus to come.",
                    image: "images/connect_stl.png",
                    url: "https://drive.google.com/open?id=0B1uHglPYIL0yWlBYZERXMEJNZkE"
                },
                {
                    title: "Poly.io",
                    dates: "2017",
                    description: "Poly.io is an action-packed multiplayer iOS game inspired by io games. It is currently under development.",
                    image: "images/poly_io.png",
                    url: "https://drive.google.com/open?id=0B1uHglPYIL0yM2hyYXpka0FSNkE"
                },
                {
                    title: "Flight Delay Prediction Using Gaussian Processes",
                    dates: "2017",
                    description: "Flight delays could cause many problems for travelers, sometimes leading to hours of waiting in the airport, being late to an important meeting or even the cancellation of the entire trip. To solve this problem, I developed a method to predict flight delays using Gaussian Process Classification. I performed feature engineering to generate features relevant to this problem, including traffic, airline and weather related features. I used Bayesian model selection to select a kernel that best explains the data. In addition I applied an ARD kernel to perform automatic feature selection. 0.78 accuracy is achieved for predicting flights from St. Louis Lambert international airport.",
                    image: "images/flight_delays.jpg",
                    url: "https://drive.google.com/open?id=0B1uHglPYIL0ybjR4czItWnlibGM"
                },
                {
                    title: "Interactive Twitter Visualization",
                    dates: "2017",
                    description: "Tweets provide a lot of information about what people are thinking and communicating but they are very challenging to visualize because of the volume of the data. To better visualize and utilize the data, we use a combination of different visualizations and make them interactive for users. With our visualization users can immediately get an overview about what people are tweeting. Because of the interactive nature of this visualization, users can also perform further investigations to dig out more insights from data if they have an objective in mind. Using this visualization, we were able to discover many interesting trends in the data.",
                    image: "images/twitter_vis.png",
                    url: "https://hahooy.github.io/twitter-vis/website/"
                },
                {
                    title: "Feature Selection for Alzheimer's disease",
                    dates: "2016",
                    description: "I applied PCA, ICA and Autoencoder to select genes that are most significant for the Alzheimer's disease.",
                    image: "images/alzheimer.png",
                    url: "https://drive.google.com/open?id=0B1uHglPYIL0yU0lsNjlsS1VEQkU"
                },
                {
                    title: "EyeCare",
                    dates: "2016",
                    description: "EyeCare is an iOS app aiming to help people who are suffering from corneal ulcers and epithelial defects. With the aid of computer vision, geometric computing, machine learning and mobile technology, EyeCare provides a reliable solution to automatically detect and quantify the symptoms. By taking a picture of the patient's eye using an iPhone with a 15 - 25 magnifying lens, EyeCare is able to detect the ulcer region on the patient's cornea and compute the defected area precisely. The app also provides an intuitive way for the patient to keep track of the progress of the symptoms.",
                    image: "images/eye_care.png",
                    url: "https://devpost.com/software/eyecare"
                },
                {
                    title: "Angler Companian",
                    dates: "2016",
                    description: "Angler Companion is a photo and location sharing iOS social app for anglers. Featuring channels, real-time photo and location sharing, length measurement on photo and more. Recording your fishing spots and sharing your exciting moments have never been this easy!",
                    image: "images/locatorcam.jpg",
                    url: "https://hahooy.github.io/LocatorCam/"
                },
                {
                    title: "Amber",
                    dates: "2016",
                    description: "Amber is a web application I developed in Monsanto for employees’ information lookup. I made significant contribution to this site's user authentication, front-end functionalities and back-end data storage.",
                    image: "images/amber.png",
                    url: "#"
                },
                {
                    title: "passport-ping-oauth2",
                    dates: "2016",
                    description: "I contributed to this open source project when I was an Co-Op in Monsanto. This npm library lets you authenticate using PingFederate's OAuth2 service in your node.js applications. You can find out more details about this project by clicking on the image below.",
                    image: "images/passport-ping-oauth2.png",
                    url: "https://www.npmjs.com/package/passport-ping-oauth2"
                },
                {
                    title: "UniSound",
                    dates: "2015",
                    description: "<strong>Awarded AT&T Prize for Best Mobile App at WUHack 2015</strong><br/>A social jukebox web app allowing users to share music to a group speaker system.",
                    image: "images/blackSquareLogo.png",
                    url: "https://hahooy.github.io/wuhack2015/"
                },
                {
                    title: "Movie Recommendation System",
                    dates: "2015",
                    description: "A movie recommendation system for predicting movie ratings of given users. The recommendation system is based on an item-item collabrative filtering algorithm implemented in Hadoop MapReduce. The training data set contains 3.25 million movie ratings provided by Netflix. How good is the algorithm? The root mean square error of the prediction is 0.92, which is the best among the class of 40+ students.",
                    image: "images/movie_ratings.png",
                    url: "https://github.com/hahooy/Item-Based-CF-Netflix/"
                },
                {
                    title: "Tic-Tac-Toe Online",
                    dates: "2015",
                    description: "Yet another tic tac toe? This is a somewhat arguably and debatable more advanced tic tac toe because it uses node.js and socket.io to enable real-time game states sharing among players. In other word, this is an online version! If you prefer playing along, you will be facing a Minimax AI. See if you can beat it? :)",
                    image: "images/tictactoe.png",
                    url: "https://tic-tac-toe-online.herokuapp.com"
                }
            ]
};
