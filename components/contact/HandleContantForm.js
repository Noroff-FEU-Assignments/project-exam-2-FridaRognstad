import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../styles/modules/Form.module.scss";
import Heading from "../layout/Heading";
import { BASE_URL } from "../../constants/Api";

export default function handleSubmit(evt) {
  evt.preventDefault();

  const id = 89;
  const [postId, fullName, email, comment] = evt.target.elements;

  const data = JSON.stringify({
    post: postId.value,
    author_name: fullName.value,
    author_email: email.value,
    content: comment.value,
  });

  fetch(BASE_URL + `wp/v2/comments?post=` + id + `&content=contactus`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  })
    .then((response) => {
      if (response.ok === true) {
        //submitted
      }

      return response.json();
    })
    .then((object) => {
      //comment submission failed
    })
    .catch((error) => console.error(`Error:`, error));
}
