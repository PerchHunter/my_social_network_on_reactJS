import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { catsSelector } from "../../Store/Cats/selectors";
import {
  getCatActionWithThunk,
  getPreviousCatAction,
} from "../../Store/Cats/action";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, LinearProgress } from "@mui/material";

export function Cats() {
  const cats = useSelector(catsSelector);
  const dispatch = useDispatch();

  const requestCats = () => {
    dispatch(getCatActionWithThunk());
  };

  const previousCat = () => {
    dispatch(getPreviousCatAction());
  };

  useEffect(() => {
    dispatch(getCatActionWithThunk());
  }, [dispatch]);

  if (cats.loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  if (cats.error) {
    return (
      <>
        <h3>Ошибочка :)</h3>
        <Button size="small" variant="contained" onClick={requestCats}>
          Обновить
        </Button>
      </>
    );
  }

  return (
    <Card sx={{ maxWidth: 420 }} style={{ position: "relative", left: "35%" }}>
      <CardMedia
        component="img"
        height="240"
        image={`${cats.cat}`}
        alt="Тут должен быть котик..."
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={previousCat}>
          Предыдущий
        </Button>
        <Button size="small" variant="contained" onClick={requestCats}>
          Следующий
        </Button>
      </CardActions>
    </Card>
  );
}
