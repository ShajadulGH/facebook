import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

function Post() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
      },
    },
  }));
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Shajadul"
              src="https://thumbs.dreamstime.com/b/portrait-happy-smiling-teenager-boy-taking-selfie-smartphone-yellow-background-265405224.jpg"
            />
          </StyledBadge>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shajadul Karim Bhuiyan"
        subheader="September 20, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://thumbs.dreamstime.com/b/portrait-happy-smiling-teenager-boy-taking-selfie-smartphone-yellow-background-265405224.jpg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <Collapse timeout="auto" unmountOnExit></Collapse>
    </Card>
  );
}

export default Post;
