import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../styles/modules/Admin.module.scss";
import Heading from "../layout/Heading";
import { BASE_URL, TOKEN_PATH } from "../../constants/Api";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useRouter } from "next/router";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      setAuth(response.data);
      router.push(`/admin/dashboard`);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.formContainer}>
      <Heading title="Login Admin" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <label htmlFor="username">Username</label>
          <input id="username" {...register("username")} />

          <label htmlFor="password">Password</label>
          <input id="password" {...register("password")} />
          <div>{loginError}</div>
          <button className={styles.button}>
            {submitting ? "..." : "Login"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
