import { useRouter } from "next/router";
import { useState } from "react";
import removeMD from "remove-markdown";

import TUIEditor from "@ui/editor/TUIEditor";
import ImageUploaderImpl from "@services/image_uploader";
import PostRepositoryImpl from "@services/post_repository";
import EditorMenus from "@ui/editor/EditorMenu";
import PostInfo from "@ui/editor/PostInfo";
import styled from "@emotion/styled";

const MAX_DESCRIPTION = 400;
const imageUploader = new ImageUploaderImpl();
const postRepository = new PostRepositoryImpl();

const Editor = styled.div`
  padding: 20px;
`;

function getDate() {
  const date = new Date();
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export default function WritePage() {
  const router = useRouter();
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState("");
  const [postContents, setPostContents] = useState("");

  const handlePrev = () => {
    router.push("/");
  };

  const addPost = () => {
    if (!(postTitle && postTags && postContents)) {
      alert("모든 내용을 입력해주세요");
      return;
    }

    const body = {
      title: postTitle,
      date: getDate(),
      description: removeMD(postContents, { useImgAltText: false }).slice(
        0,
        MAX_DESCRIPTION
      ),
      tags: postTags.replaceAll(/ /gi, "").split(","),
      contents: postContents,
    };

    postRepository
      .create(body)
      .then((res) => {
        if (res) {
          alert("포스트 작성 성공");
          router.push("/");
        } else {
          alert("포스트 작성 실패");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Editor>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>
      <PostInfo setPostTitle={setPostTitle} setPostTags={setPostTags} />

      <TUIEditor
        imageUploader={imageUploader}
        onChange={(value) => setPostContents(value)}
      />
      <EditorMenus addPost={addPost} handlePrev={handlePrev} />
    </Editor>
  );
}
