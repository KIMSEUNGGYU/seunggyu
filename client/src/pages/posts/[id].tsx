import { PostData } from '@common/types';
import { GetServerSidePropsContext } from 'next';

import PostPage from '@components/layout/Post';
import PostRepository from '@services/post_repository';
const postRepository = new PostRepository();

interface Props {
  post: PostData;
}

export default function Page({ post }: Props) {
  return <PostPage post={post} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof context.query.id == 'string') {
    const post = await postRepository.detailRead(context.query.id);
    const parsePost = { ...post, tags: post.tags.name };
    return {
      props: { post: parsePost },
    };
  }
}
