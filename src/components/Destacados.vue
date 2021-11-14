<template>
  <div class="container">
    <h3>Profesionales destacados</h3>
    <div class="row">
      <div class="col-md-12">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              id="btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              id="btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              id="btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img src="" alt="" />
                      <div class="img-text">
                        <h2>Person 1</h2>
                        <span class="badge bg-warning text-dark">Gasista</span>
                        <span class="badge bg-info text-dark">Plomero</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img src="" alt="" />
                      <div class="img-text">
                        <h2>Person 2</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto rerum labore odio laboriosam. Quaerat
                          dolor facilis amet iste provident, voluptatem quidem
                          dicta suscipit eligendi similique eius odio officiis
                          commodi atque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img src="" alt="" />
                      <div class="img-text">
                        <h2>Person 3</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto rerum labore odio laboriosam. Quaerat
                          dolor facilis amet iste provident, voluptatem quidem
                          dicta suscipit eligendi similique eius odio officiis
                          commodi atque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img src="" alt="" />
                      <div class="img-text">
                        <h2>Person 4</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto rerum labore odio laboriosam. Quaerat
                          dolor facilis amet iste provident, voluptatem quidem
                          dicta suscipit eligendi similique eius odio officiis
                          commodi atque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img src="" alt="" />
                      <div class="img-text">
                        <h2>Person 5</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto rerum labore odio laboriosam. Quaerat
                          dolor facilis amet iste provident, voluptatem quidem
                          dicta suscipit eligendi similique eius odio officiis
                          commodi atque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="single-box">
                    <div class="img-area">
                      <img :src="'assets/user-pic.jpg'" alt="" />
                      <div class="img-text">
                        <h2>Person 6</h2>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Iusto rerum labore odio laboriosam. Quaerat
                          dolor facilis amet iste provident, voluptatem quidem
                          dicta suscipit eligendi similique eius odio officiis
                          commodi atque.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Destacados",
};
</script>
<style scoped>
.container {
  margin-top: 1%;
  margin-bottom: 1%;
}
.img-text {
  width: 80%;
  height: 100px;
  display: block;
  text-align: center;
  padding: 40% 5%;
  background: #262626;
  color: #fff;
  border-radius: 15px;
}
.img-text p {
  font-size: 10px;
}
.single-box {
  position: relative;
  margin-bottom: 50px;
}
.img-area img {
  width: 100%;
  background-color: #fdfdfd;
}
.carousel-indicators {
  left: 0;
  top: auto;
  bottom: -10px;
}

#btn {
  background-color: #000;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
</style>
