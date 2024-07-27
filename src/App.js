import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Grow, Grid } from "@mui/material";
import blogLogo from "./Assets/Logo.png";
import Blogs from "./components/Blogs";
import BlogPostsForm from "./components/BlogPostsForm";
import {AppBarCustom, Image, Title} from "./styles/app.styles.js";
import { useDispatch } from "react-redux";
import { fetchAllBlogPosts } from "./actions/blogPosts";
function App() {
  const [blogPostId, setBlogPostId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogPosts());
  }, [blogPostId, dispatch]);

  return (
    <div className="App">
      <Container maxWidth="xl">
        <AppBarCustom
          position="static"
          color="inherit"
        >
          <Image
            // className={theme.image}
            src={blogLogo}
            alt="icon"
            height="100"
          />
          <Title  variant="h2" align="center">
            Gomyblog
          </Title>
        </AppBarCustom>
        <Grow in>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item xs={12} sm={3}>
              <BlogPostsForm
                blogPostId={blogPostId}
                setBlogPostId={setBlogPostId}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <Blogs setBlogPostId={setBlogPostId} />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
