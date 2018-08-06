import {init, userValid} from '../repo';

describe("#repo", () => {
  beforeEach(async () => {
    await init();
  });

  test("Return valid user", async () => {
    const user = await userValid('alice', 'password');
    expect(user).toEqual({username: 'alice'});
  });
  test("Return undefined user when password wrong", async () => {
    const user = await userValid('alice', 'wrong');
    expect(user).toBeUndefined();
  });
  test("Return undefined user when username wrong", async () => {
    const user = await userValid('not-a-user', 'password');
    expect(user).toBeUndefined();
  });
  test("Return undefined user when sql injection attempted", async () => {
    const user = await userValid('not-a-user', '\' or 1 = 1; --');
    expect(user).toBeUndefined();
  });
});
