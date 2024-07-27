import React from "react";
import {
  Typography,
  CardMedia,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material/";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import blogImageLogo from "../../Assets/blogLogo.gif";

import { upvoteBlogPosts, removeBlogPosts } from "../../actions/blogPosts";
import blogPostStyles from "./styles";

const BlogPosts = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card sx={blogPostStyles.blogContainer}>
        <CardMedia
          sx={blogPostStyles.imageContainer}
          image={post.fileUpload || blogImageLogo}
          title={post.title}
        />
        <div style={blogPostStyles.nameOverlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div style={blogPostStyles.editOverlay}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <EditIcon fontSize="medium" />
          </Button>
        </div>
        <div style={blogPostStyles.tagSection}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          sx={blogPostStyles.titleSection}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions sx={blogPostStyles.cardActions}>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(upvoteBlogPosts(post._id))}
          >
            <ArrowUpwardIcon fontSize="small" /> {post.likeCount}{" "}
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(removeBlogPosts(post._id))}
          >
            <DeleteIcon fontSize="large" />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BlogPosts;
