import firebase from "firebase/app";

import { GET_USER_INFO_ACTION } from "./constants.js";

export const getUserInfoAction = ({
  userName,
  userSurname,
  userAge,
  userInfo,
  userGender,
}) => ({
  type: GET_USER_INFO_ACTION,
  payload: { userName, userSurname, userAge, userInfo, userGender },
});

export const сhangeInfoOfUserFirebaseWithThunk =
  ({ e }) =>
  () => {
    //при изменении данных кладём их в БД
    const id = firebase.auth().currentUser.uid; //достаём id пользователя
    firebase
      .database()
      .ref("profile")
      .child(id)
      .child(e.target.name)
      .set(e.target.value);
  };

export const getUserInfoFromFirebaseWithThunk =
  () => async (dispatch, getState) => {
    //подписка, которая реагирует на изменение имени в БД
    const id = firebase.auth().currentUser.uid;
    await firebase
      .database()
      .ref("profile")
      .child(id)
      .on("value", (snapshot) => {
        //когда мы только зарегистрировались и заходим в профиль, в БД наших данных пока нет.
        //срабатывает useEffect профиля и в этот момент snapshot.val() == null, поэтому:
        //когда в БД есть наши данные, то идём дальше
        if (snapshot.val() == null) return;

        const userName = snapshot.val().userName;
        const userSurname = snapshot.val().userSurname;
        const userAge = snapshot.val().userAge;
        const userInfo = snapshot.val().userInfo;
        const userGender = snapshot.val().userGender;
        dispatch(
          getUserInfoAction({
            userName,
            userSurname,
            userAge,
            userInfo,
            userGender,
          })
        );
      });
  };
