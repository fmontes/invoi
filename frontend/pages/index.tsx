import * as React from 'react';
import { NextStatelessComponent } from 'next';
import Link from 'next/link';
import { Models } from '@invoi/api/models';
import { apiClient } from '@invoi/api';
import { Layout } from '@invoi/components';

interface Props {
    posts: Models.Mock[];
}

const Home: NextStatelessComponent<Props> = ({ posts: data }) => {
    return (
        <Layout>
            <h1>Home</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <Link passHref href={`/${item.id}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

Home.getInitialProps = async () => {
    const posts = await apiClient.posts.getListing();
    return { posts };
};

export default Home;
