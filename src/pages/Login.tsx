import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0002",
      password: "admin123",
    },
  });

  const [login, { data, error }] = useLoginMutation();
  console.log("data => ", data);
  console.log("error => ", error);

  const onSubmit = (data) => {
    console.log(data);
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    login(userInfo);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3> components Login </h3>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password : </label>
        <input type="text" id="password" {...register("id")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
