import Head from 'next/head';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

import PostInfo from 'src/components/UI/post/PostInfo';
import Contents from 'src/components/UI/post/Contents';
import { PostData } from '@common/types';

interface Props {
  post: PostData;
}

function PostPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title} | SEUNGGYU</title>
        <meta name="description" content={post.description} />
        <meta name="og:title" content={`${post.title} | SEUNGGYU`} />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png"
        />
        <meta name="og:description" content={post.description} />
      </Head>
      <Global styles={globalStyle} />
      <PostPageContainer>
        <PostInfo post={post} />
        <Contents post={post} />
      </PostPageContainer>
    </>
  );
}

const globalStyle = css`
  body {
    background-color: white;
    margin: 0;
  }
`;

const PostPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  padding: 1em;
`;

export default PostPage;
