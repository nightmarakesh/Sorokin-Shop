const Form = () => {
  return (
      <form className="newsletter-form">
          <label
              className="newsletter-form__label"
              htmlFor="email"
          >
              Email
          </label>

          <input
              className="newsletter-form__input"
              id="email"
              name="email"
              type="email"
              placeholder="Твой email"
          />

          <button
              className="newsletter-form__button"
              type="submit"
          >
              Подписаться
          </button>
      </form>
  )
}

export default Form;