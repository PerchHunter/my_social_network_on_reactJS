import { profileReducer } from "../reducer";
import { getUserInfoAction } from "../action";

describe("testing the profile section", () => {
  test("We check whether the user data is being recorded correctly", () => {
    const userName = "Сергей";
    const userSurname = "Феоктистов";
    const userAge = "27";
    const userInfo = "прпрпрпрпрп";
    const userGender = "Мужской";

    const expected = {
      currentUser: {
        userName: userName,
        userSurname: userSurname,
        userAge: userAge,
        userInfo: userInfo,
        userGender: userGender,
      },
    };

    const received = profileReducer(
      undefined,
      getUserInfoAction({
        userName,
        userSurname,
        userAge,
        userInfo,
        userGender,
      })
    );

    expect(received).toEqual(expected);
  });
});
