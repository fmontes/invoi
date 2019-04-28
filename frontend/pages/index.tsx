import * as React from "react";
import { NextStatelessComponent } from "next";
import Link from "next/link";
import { Models } from "@invoi/backend/api/models";
import { apiClient } from "@invoi/backend/api";

interface Props {
  posts: Models.Mock[];
}

const Home: NextStatelessComponent<Props> = ({ posts: data }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link passHref href={`/${item.id}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.getInitialProps = async () => {
  const posts = await apiClient.posts.getListing();
  return { posts };
};

export default Home;
