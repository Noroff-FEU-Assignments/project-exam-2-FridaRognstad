import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../hooks/useAxios";
import Heading from "../layout/Heading";
import MediaDropdown from "./Media";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
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

    console.log(data);

    try {
      const response = await http.post("wp/v2/posts", data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Heading title="Add Establishment" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <label htmlFor="title">Title</label>
          <input id="title" {...register("title")} />

          <label htmlFor="content">Description</label>
          <textarea id="content" {...register("content")} />

          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </>
  );
}
