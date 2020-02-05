import React from 'react';
import {Card} from 'primereact/card';

function Article(props) {

    const { data } = props;

    const footer = <span>
            <p>By {data.author}</p>
            </span>;

    return <>

        <Card title={data.title} footer={footer}>
            {data.text}
        </Card>
    </>
}

export default Article;