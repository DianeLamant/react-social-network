import React from 'react';
import People from '../components/People';
import Article from '../components/Article';

function Home(props) {

    const { articles, people } = props;

    return <>
        <div className="p-col-12 p-md-6 p-lg-3">
            {articles.map((data, i) => (
                <Article data={data} />
            ))}
        </div>

        
        <div className="p-col-12 p-md-6 p-lg-3">
            {people.length > 0 &&
                <People people={people} />
            }
        </div>
    </>
}

export default Home;