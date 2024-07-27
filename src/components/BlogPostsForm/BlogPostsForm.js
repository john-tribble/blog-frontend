import React, { useState, useEffect } from "react";
import { Paper, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import theme, {TextFieldCustom as TextField, FormCustom as Form} from "./styles";
import { addBlogPosts, editBlogPosts } from "../../actions/blogPosts";


const BlogPostsForm = ({ blogPostId, setBlogPostId }) => {
  const [blogInfo, setBlogInfo] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const post = useSelector((state) =>
    blogPostId
      ? state.posts.find((message) => message._id === blogPostId)
      : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setBlogInfo(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (blogPostId === 0) {
      dispatch(addBlogPosts(blogInfo));
    } else {
      dispatch(editBlogPosts(blogPostId, blogInfo));
    }
  };

  return (
    <Paper sx={theme.paper}>
      <Form
        autoComplete="on"
        noValidate
        className={[theme.form, theme.root]}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {blogPostId ? `Mise à jour "${post.title}"` : "✨ Créer un blog ✨"}
        </Typography>

        <div style={theme.chooseFile}>
          <Typography> 🖼️ Charger l'image du blog </Typography>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setBlogInfo({ ...blogInfo, fileUpload: base64 })
            }
          />
        </div>
        <TextField
          name="title"
          variant="outlined"
          label="🔥 Titre du Blog"
          fullWidth
          value={blogInfo.title}
          onChange={(e) => setBlogInfo({ ...blogInfo, title: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="📙 Description du Blog"
          fullWidth
          multiline
          rows={7}
          value={blogInfo.description}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, description: e.target.value })
          }
        />
        <TextField
          name="creator"
          variant="outlined"
          label="✍️ Nom de l'Autheur"
          fullWidth
          value={blogInfo.creator}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, creator: e.target.value })
          }
        />
        <Typography>Tags (5 max séparé par des virgules)</Typography>
        <TextField
          name="tags"
          variant="outlined"
          label="🏷️ Tags"
          fullWidth
          value={blogInfo.tags}
          onChange={(e) =>
            setBlogInfo({ ...blogInfo, tags: e.target.value.split(",") })
          }
        />

        <Button
          sx={theme.publishButton}
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Publish 📝
        </Button>
      </Form>
    </Paper>
  );
};

export default BlogPostsForm;
