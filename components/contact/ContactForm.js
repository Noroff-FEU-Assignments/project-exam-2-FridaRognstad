import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../styles/modules/Form.module.scss";
import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/Api";
import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const schema = yup.object().shape({
    post: yup.number(),
    author_name: yup
      .string()
      .required("Please enter a name")
      .min(5, "Name must contain minimum 5 characters"),
    author_email: yup
      .string()
      .required("Please enter an email address")
      .email("Please enter a valid email format"),
    content: yup
      .string()
      .required("Please enter a message")
      .min(10, "Message must contain minimum 10 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const id = 89;
  const url = BASE_URL + `wp/v2/comments?post=` + id + `&content=contactus`;

  async function onSubmit(data) {
    setSubmitting(true);
    setError(null);
    console.log(data);
    try {
      const response = await axios.post(url, data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactImg}></div>
      <div className={styles.formContainer}>
        <Heading title={"Contact"} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" id="post" value={id} {...register("post")} />
          <label htmlFor="author_name">Full name</label>
          <input id="author_name" {...register("author_name")} />
          {errors.author_name && <span>{errors.author_name.message}</span>}

          <label htmlFor="author_email">Email</label>
          <input id="author_email" type="email" {...register("author_email")} />
          {errors.author_email && <span>{errors.author_email.message}</span>}

          <label htmlFor="content">Message</label>
          <textarea id="content" {...register("content")} />
          {errors.content && <span>{errors.content.message}</span>}

          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}
