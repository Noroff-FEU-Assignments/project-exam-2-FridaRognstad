import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import { ESTABLISHMENTS_PATH, POST_KEY } from "../../constants/Api";
import styles from "../../styles/modules/Form.module.scss";

const schema = yup.object().shape({
  name: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.string().required("Price is required"),
});

export default function AddPost() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    try {
      const response = await http.post(ESTABLISHMENTS_PATH + POST_KEY, data);
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.dashboardForm}>
      <div className={styles.formContainer}>
        <Heading title="Add Establishment" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="name">Title</label>
            <input id="name" {...register("name")} />

            <label htmlFor="description">Description</label>
            <textarea id="description" {...register("description")} />

            <label htmlFor="price">Price</label>
            <input id="price" {...register("price")} />

            <button className={styles.button}>{"Submit"}</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
