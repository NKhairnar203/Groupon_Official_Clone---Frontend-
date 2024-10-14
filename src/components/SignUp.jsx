import React, { useState } from "react";
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
const SignUp = () => {
  const [changeEye, setChangeEye] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleValue(e) {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }
  //  "http://localhost:8080/api/users/register"
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://groupon-official-clone-backend.onrender.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      alert("User created successfully");
    } else {
      alert("Error creating user");
    }

    console.log(response);
  };

  function handleChangeIcon() {
    setChangeEye(!changeEye);
  }
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
      <Typography level="body-xs">Or sign up with email</Typography>
      <Stack sx={{ width: "270px" }}>
        <form onSubmit={handleSignUp}>
          <Stack spacing={1}>
            <Input
              color="neutral"
              disabled={false}
              placeholder="Name"
              size="md"
              variant="outlined"
              required
              value={data.name}
              name="name"
              onChange={handleValue}
            />
            <Input
              value={data.email}
              name="email"
              color="neutral"
              disabled={false}
              placeholder="Email"
              size="md"
              variant="outlined"
              required
              onChange={handleValue}
            />
            <Input
              value={data.password}
              name="password"
              endDecorator={changeEye ? <RiEyeLine /> : <RiEyeOffLine />}
              type={changeEye ? `text` : `password`}
              placeholder="Password"
              size="md"
              variant="outlined"
              onClick={handleChangeIcon}
              onChange={handleValue}
            />

            <Button sx={{ borderRadius: 30, bgcolor: "green" }} type="submit">
              Sign Up
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

export default SignUp;
