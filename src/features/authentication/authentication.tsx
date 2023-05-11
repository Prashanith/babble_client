import { useState, useEffect } from "react";
import { InputField } from "../../components/inputField/inputField";
import Button from "../../components/button/button";
import SizedBox from "../../components/sizedBox";
import { ButtonType } from "../../components/button/buttonTypes";
import { httpClient } from "../../services/httpClient";
import { useAuth } from "../../hooks/useAuth";
import { AuthenticationModel } from "../../models/classes/models";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const auth = useAuth();
  const navigator = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [isSignIn, setIsSignIn] = useState<boolean>(true);

  async function authenticate(): void {
    const res = await httpClient.post("/auth/login", {
      email: email,
      password: password,
    });
    console.log(res);
    
    if (res.status == 200) {
      const result = new Date();
      result.setDate(result.getDate() + 2);

      auth.setAccessToken(
        new AuthenticationModel(
          res.data.data.access_token,
          res.data.data.access_token,
          new Date(),
          result
        )
      );
      navigator('/messages');
    }
  }
  useEffect(() => {
    //console.log("Loading");
  }, []);

  return (
    <div className="w-full h-screen flex flex-col mx-0 justify-start items-stretch">
      {/* Incace of NAV */}
      <div className="h-screen flex flex-row justify-start items-center bg-white-d text-black">
        {/* BRAND*/}
        <div className="flex flex-col justify-start items-start w-1/2 h-screen pt-[20vh] bg-primary-d text-white px-10 ">
          <div className="tracking-widest text-2xl">BABBLE</div>
          <SizedBox height="h-[3vh]" />
          <p>{auth.state.isAuthenticated.toString()}</p>
          <p className=" text-3xl font-bold text-secondary-d">
            We help you connect and share with the people in your life.
          </p>
          <img
            src="/public/landing.svg"
            className="object-contain h-[50vh] self-center"
          />
        </div>

        {/* FORM */}
        <div className="flex flex-col justify-start items-start w-1/2 px-10">
          <b className="text-2xl">{isSignIn ? "Login" : "Register"}</b>
          <SizedBox height="h-7" />
          <span>
            <p>
              {!isSignIn
                ? "Already have an account?"
                : "Don't have an account?"}
            </p>
            <Button
              title={!isSignIn ? "LOGIN" : "REGISTER"}
              onClick={() => setIsSignIn((e) => !e)}
              btnType={ButtonType.TEXT}
            />
          </span>
          <SizedBox height="h-7" />
          <InputField
            label={"Email"}
            placeHolder={"Enter Your Email"}
            value={email}
            onChange={setEmail}
            postChange={function (): void {
              //
            }}
            validator={function (e: string): string | null | undefined {
              if (e.length < 10) return "Invalid Email";
            }}
            error={emailError}
            setError={setEmailError}
          />
          <SizedBox height="h-7" />
          <InputField
            label={"Password"}
            placeHolder={"Enter Password"}
            value={password}
            onChange={setPassword}
            validator={function (e: string): string | null | undefined {
              return null;
            }}
            error={passwordError}
            setError={setPasswordError}
          />
          <SizedBox height="h-7" />
          <Button title={"LOGIN"} onClick={() => authenticate()} />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
