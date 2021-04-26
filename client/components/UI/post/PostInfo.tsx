import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { theme } from '@theme/index';
import { GetPostData } from '@common/types';
import { Typography, Button } from 'antd';

import { useRecoilValue } from 'recoil';
import { isLoginState } from '@state/index';
const { Text } = Typography;

import PostRepository from '@services/post_repository';
const postRepository = new PostRepository();

interface Props {
  post: GetPostData;
}

function Info({ post }: Props) {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginState);

  const deletePost = async (postId: string) => {
    const response = await postRepository.deletePost(postId);
    if (response && response.status === 200) {
      alert('삭제 성공');
      router.push('/');
      return;
    }

    alert('삭제 실패');
  };

  return (
    <PostInfo>
      <Title>{post.title}</Title>
      <div>
        <DateString type="secondary">{post.date}</DateString>
        {isLogin && (
          <div>
            <Button size="small" onClick={() => router.push(`/update/${post.id}`)}>
              수정
            </Button>
            <Button size="small" onClick={() => deletePost(post.id)}>
              삭제
            </Button>
          </div>
        )}
      </div>
      <Tags>
        {post.tags.map((tag, idx) => (
          <Tag key={idx}>#{tag}</Tag>
        ))}
      </Tags>
    </PostInfo>
  );
}

const PostInfo = styled.div`
  width: 100%;

  & > div {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  Button + Button {
    margin-left: 10px;
    align-self: center;
  }
`;

const Title = styled(Text)`
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const DateString = styled(Text)`
  color: ${theme.GREY_TEXT_COLOR};
  font-weight: bold;
  align-self: center;
`;

const Tags = styled.ul`
  display: flex;
`;

const Tag = styled.li`
  color: ${theme.MAIN_COLOR};
  font-weight: bold;
  margin-right: 6px;
  font-weight: bold;
`;

export default Info;
