const Vegefoods = process.env.PUBLIC_URL + 'assets/img/projects/Vegefoods.png';
const Covid = process.env.PUBLIC_URL + 'assets/img/projects/COVID.png';
const MERN = process.env.PUBLIC_URL + 'assets/img/projects/MERN.png';
const Meditation = process.env.PUBLIC_URL + 'assets/img/projects/Meditation.png';
const Recipe = process.env.PUBLIC_URL + 'assets/img/projects/Recipe.png';
const Advice = process.env.PUBLIC_URL + 'assets/img/projects/Advice.png';
const Joker = process.env.PUBLIC_URL + 'assets/img/projects/Joker.png';
const CRUD = process.env.PUBLIC_URL + 'assets/img/projects/CRUD.png';
const Pass = process.env.PUBLIC_URL + 'assets/img/projects/Pass.png';

export default [
    {
        name:'Vegefoods', 
        page:'https://github.com/DannyM1chael/HackerU/tree/master/7_Frontend/project/vegefoods', 
        img: Vegefoods,
        category: 'Frontend',
    },
    {
        name:'Get/Check passes', 
        page: 'https://github.com/skinnerdany/gov', 
        img: Pass,
        category: 'Fullstack'
    },
    {
        name:'COVID-19-Tracker' , 
        page: 'https://github.com/DannyM1chael/COVID-19-Tracker', 
        img: Covid,
        category: 'Fullstack'
    },
    {
        name:'Realtime-chat (MERN + Docker)', 
        page: 'https://github.com/DannyM1chael/mern-docker', 
        img: MERN,
        category: 'Fullstack'
    },
    {
        name:'Recipe-app', 
        page: 'https://github.com/DannyM1chael/Recipe-app', 
        img: Recipe,
        category: 'Frontend'
    },
    {
        name:'Meditation-app', 
        page:'https://github.com/DannyM1chael/Meditation-app', 
        img: Meditation,
        category: 'Frontend'
    },
    {
        name:'Advice-app', 
        page: 'https://github.com/DannyM1chael/Advice-react-app', 
        img: Advice,
        category: 'Frontend'
    },
    {
        name:'CRUD PHP-MySQL', 
        page: 'https://github.com/DannyM1chael/CRUD-php-mysql', 
        img: CRUD,
        category: 'Frontend'
    },
    {
        name:'Joker-movie', 
        page: 'https://github.com/DannyM1chael/Joker-movie-page', 
        img: Joker,
        category: 'Frontend'
    }
]