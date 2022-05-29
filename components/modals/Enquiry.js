import axios from "axios";
import { BASE_URL, POST_KEY } from "../../constants/Api";
import styles from "../../styles/modules/Form.module.scss";
import Heading from "../layout/Heading";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

const url = BASE_URL + `wc/v3/products/reviews` + POST_KEY;

export default function EnquaryForm({ enquiryId }) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const schema = yup.object().shape({
    post: yup.number(),
    reviewer: yup
      .string()
      .required("Please enter a name")
      .min(5, "Name must contain minimum 5 characters"),
    reviewer_email: yup
      .string()
      .required("Please enter an email address")
      .email("Please enter a valid email format"),
    review: yup.string("must be a number").required("Select a date"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setError(null);
    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const postId = enquiryId;
  return (
    <div className={styles.enquiryForm}>
      <div className={styles.formContainer}>
        <Heading title={"Booking"} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            id="product_id"
            value={postId}
            {...register("product_id")}
          />
          <label htmlFor="reviewer">Full name</label>
          <input id="reviewer" {...register("reviewer")} />

          <label htmlFor="reviewer_email">Email</label>
          <input
            id="reviewer_email"
            type="email"
            {...register("reviewer_email")}
          />

          <label htmlFor="review">Checkin</label>
          <input id="review" type="date" {...register("review")} />

          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
}

EnquaryForm.propTypes = {
  enquiryId: PropTypes.string,
};
