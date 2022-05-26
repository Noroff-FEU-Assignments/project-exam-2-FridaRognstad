import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import { ESTABLISHMENTS_PATH, POST_KEY } from "../../constants/Api";
import styles from "../../styles/modules/Form.module.scss";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Please enter a description"),
});

export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setError] = useState(null);

  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post(ESTABLISHMENTS_PATH + POST_KEY, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.dashboardForm}>
      <div className={styles.formContainer}>
        <Heading title="Add Establishment" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset disabled={submitting}>
            <label htmlFor="name">Title</label>
            <input id="name" {...register("name")} />

            <label htmlFor="description">Description</label>
            <textarea id="description" {...register("description")} />

            <button className={styles.button}>
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
