import Field from "./Field.jsx";
import Button from "./Button.jsx";

const EmailForm = () => {
  return (
      <form className="newsletter-form">
          <Field
                className="newsletter-form"
                id="email"
                label="Email"
                type="email"
                placeholder="Введите свой Email"
          />
          <Button
                className="newsletter-form"
                type="submit"
                children="Подписаться"
          />
      </form>
  )
}

export default EmailForm;