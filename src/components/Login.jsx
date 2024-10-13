import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import {
  RiAppleFill,
  RiEyeLine,
  RiEyeOffLine,
  RiFacebookCircleFill,
  RiGoogleFill,
} from "@remixicon/react";
import { useAuth } from "../context/AuthProvider";
const Login = () => {
  const [changeEye, setChangeEye] = useState(true);
  const { storeTokenInLS, storeUserData, token, StoreData } = useAuth();
  const [userId, setUserId] = useState(localStorage.getItem("userID"));

  function handleChangeIcon() {
    setChangeEye(!changeEye);
  }
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleValue(e) {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }

  // this is handle - send request to login backend: and get token
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const res_data = await response.json();
      const token = res_data.token;
      const userID = res_data.userId;
      console.log(token);
      storeTokenInLS(token);
      storeUserData(userID);
      getUser(userID, token);
      alert("Logging successfully");
    } else {
      alert("Error Logging");
    }
    console.log(userId);
  };

  const getUser = async (userID, token) => {
    const response = await fetch(`http://localhost:8080/api/users/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.ok) {
      const userData = await response.json();
      console.log(userData.name.toUpperCase().split("")[0]);
      console.log("hello");
      StoreData(userData);
      console.log(userData)
    } else {
      console.log("Error");
    }
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(()=>{
  //    if (userId) {
  //
  //    }
  //   },1000)

  // }, [userId]);

  return (
    <Stack
      direction="column"
      spacing={2.5}
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} sx={{ width: "270px" }}>
        <Button
          variant="outlined"
          sx={{ borderRadius: 30, width: "270px" }}
          color="neutral"
        >
          <RiFacebookCircleFill className="mr-2" color="blue" />
          Continue with Facebook
        </Button>{" "}
        <Button
          variant="outlined"
          sx={{ borderRadius: 30, width: "270px" }}
          color="neutral"
        >
          {" "}
          <RiGoogleFill className="mr-2" />
          Continue with Google
        </Button>{" "}
        <Button
          variant="outlined"
          sx={{ borderRadius: 30, width: "270px" }}
          color="neutral"
        >
          <RiAppleFill className="mr-2" />
          Continue with Apple
        </Button>
      </Stack>
      <Typography level="body-xs">Or sign in with email</Typography>
      <Stack sx={{ width: "270px" }}>
        <form onSubmit={handleSignUp}>
          <Stack spacing={1}>
            <Input
              color="neutral"
              disabled={false}
              placeholder="Email"
              size="md"
              variant="outlined"
              required
              value={data.email}
              name="email"
              onChange={handleValue}
            />
            <Input
              endDecorator={changeEye ? <RiEyeLine /> : <RiEyeOffLine />}
              type={changeEye ? `text` : `password`}
              value={data.password}
              name="password"
              placeholder="Password"
              size="md"
              variant="outlined"
              onChange={handleValue}
              onClick={handleChangeIcon}
            />
            <Typography
              level="body-xs"
              sx={{ textAlign: "end", paddingY: "10px" }}
            >
              forget_password
            </Typography>
            <Button sx={{ borderRadius: 30, bgcolor: "green" }} type="submit">
              Sign In
            </Button>
          </Stack>
        </form>
      </Stack>
      <Stack sx={{ width: "270px" }} spacing={2.5}>
        <Typography
          level="body-xs"
          sx={{ fontSize: "10px", textAlign: "center" }}
        >
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </Typography>
        <Typography
          level="body-xs"
          sx={{ fontSize: "10px", textAlign: "center" }}
        >
          By clicking an option above, I agree to the Terms and Conditions and
          have read the Privacy Statement.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Login;
