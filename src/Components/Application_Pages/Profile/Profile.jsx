import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  TextField,
  Radio,
  Box,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

import {
  getUserInfoFromFirebaseWithThunk,
  сhangeInfoOfUserFirebaseWithThunk,
} from "../../Store/Profile/action";

export function Profile() {
  const dispatch = useDispatch();

  const handleChangeInfoOfUser = (e) => {
    dispatch(сhangeInfoOfUserFirebaseWithThunk({ e }));
  };

  useEffect(() => {
    dispatch(getUserInfoFromFirebaseWithThunk());
  }, [dispatch]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Страница профиля</h1>
      <Box
        id="formOfUserInfo"
        component="form"
        style={{ width: "570px" }}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-basic"
            label="Имя"
            variant="outlined"
            placeholder="Ваше имя"
            type="text"
            name="userName"
            onChange={handleChangeInfoOfUser}
          />
          <TextField
            id="outlined-textarea"
            label="Фамилия"
            placeholder="Ваша фамилия"
            type="text"
            multiline
            name="userSurname"
            onChange={handleChangeInfoOfUser}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Возраст"
            multiline
            type="number"
            placeholder="Ваш возраст"
            name="userAge"
            onChange={handleChangeInfoOfUser}
          />
          <TextField
            id="outlined-multiline-static"
            label="Расскажите о себе..."
            type="text"
            multiline
            rows={6}
            name="userInfo"
            onChange={handleChangeInfoOfUser}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
              aria-label="gender"
              defaultValue="Мужской"
              row
              name="userGender"
              onChange={handleChangeInfoOfUser}
            >
              <FormControlLabel
                value="Женский"
                control={<Radio />}
                label="Женский"
              />
              <FormControlLabel
                value="Мужской"
                control={<Radio />}
                label="Мужской"
              />
              <FormControlLabel
                value="Другой"
                control={<Radio />}
                label="Другой &#129300;"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Button variant="contained" form="formOfUserInfo" type="reset">
          Сброс (Это пока просто сброс полей ввода)
        </Button>
      </Box>
    </div>
  );
}
