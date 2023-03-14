import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div>
                  <h1>About page</h1>
                  <Link to="/">back to home page</Link>{" "}
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Dolorum asperiores odio ut sapiente consectetur! Nobis 
                    accusantium fugiat fuga aspernatur debitis eaque similique natus,
                     enim obcaecati iusto aut. Quas, ea reprehenderit.</p>
        </div>
     );
};

export default About;
