import MyButton from "./MyButton";
import MyInput from "./MyInput";

export default function LoginForm() {
  return (
    <>
      <MyInput type="email" placeholder="Email" />
      <MyInput type="password" placeholder="Password" />
      <>
        <MyButton text="Login" />
        <MyButton text="Sign Up" />
      </>
    </>
  );
}
