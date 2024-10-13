import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import { RiAccountCircleLine, RiArrowDropDownLine } from "@remixicon/react";
import Login from "./Login";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import SignUp from "./SignUp";
import AfterLogin from "./AfterLogin";
import { useAuth } from "../context/AuthProvider";

export default function PositionedMenu() {
  const [change, setChange] = React.useState(false);
  const { isLoggedIn, userData } = useAuth();
  const [firstLetter, setFirstLetter] = React.useState("");
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  React.useEffect(() => {
    if (user) {
      setFirstLetter(user.name.toUpperCase().split("")[0]);

    }
  }, []);
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        sx={{
          borderRadius: 30,
          padding: 1,
        }}
      >
        <RiAccountCircleLine className="mr-1" />
        {isLoggedIn ? firstLetter : "Sign In"}
        <RiArrowDropDownLine />
      </MenuButton>
      <Menu
        placement="bottom-end"
        sx={{
          height: "450px",
          paddingY: 5,
        }}
      >
        {!isLoggedIn ? (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              paddingX: "20px",
              marginY: 2,
            }}
          >
            <Button
              onClick={function () {
                setChange(true);
              }}
              variant="plain"
            >
              I have an account
            </Button>
            <Button
              onClick={function () {
                setChange(false);
              }}
              variant="plain"
            >
              I'm a new coustomer
            </Button>
          </Stack>
        ) : null}
        {!isLoggedIn ? change ? <Login /> : <SignUp /> : <AfterLogin />}
      </Menu>
    </Dropdown>
  );
}
