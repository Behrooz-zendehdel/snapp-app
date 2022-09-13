import React from 'react'
import image_food from "../../assets/image-food.jpeg";

const HeaderHooksFood = () => {
  return (
    <section style={{ marginTop: "100px" }}>
    <div className="header-home">
      <div className="home-right food-right">
        <div className="detail">
          <h1>سفارش آنلاین غذا با اسنپ</h1>
          <p style={{ marginTop: "3rem" }}>
            غذای خانگی دوست دارید یا فست‌فود؟ گوشت لذیذ یا سالاد‌های
            رنگارنگ؟ سفارش آنلاین غذا را با اسنپ تجربه کنید و در کوتاه‌ترین
            زمان و با بسته‌بندی مناسب، درب منزل یا محل کارتان تحویل بگیرید.
          </p>

          <button
            className="btn-web food-btn"
            type="submit"
            style={{ marginTop: "6rem" }}
          >
            غذا سفارش دهید
          </button>
        </div>
      </div>
      <div className="home-left">
        <img src={image_food} alt="" />
      </div>
    </div>
  </section>
  )
}

export default HeaderHooksFood