import "./InfoCard.css";

export default function InfoCard(info) {
  let data = info.weatherInfo;
  const HUMID_URL =
    "https://i.pinimg.com/564x/16/a8/59/16a8596546f510d150b1f5fd31bbd52b.jpg";
  const HOT_URL =
    "https://images.unsplash.com/photo-1612360082226-bc63bd2d421f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://i.pinimg.com/564x/85/3c/a1/853ca1248c63e7d2b8cfc6198ada9f65.jpg";
  console.log(data);
  if (Object.keys(data).length !== 0) {
    return (
      <>
        <div
          className="card-container"
          style={{
            backgroundImage: `url(${
              data.humidity > 80
                ? HUMID_URL
                : data.temp > 15
                ? HOT_URL
                : COLD_URL
            })`,
          }}
        >
          <div className="info">
            <div className="first-block">
              <span className="city" style={{ paddingRight: "20px" }}>
                <h3
                  style={{
                    fontWeight: "300",
                    fontSize: "56px",
                    paddingTop: "30px",
                  }}
                >
                  {data.city}
                </h3>
                <p style={{ fontSize: "18px", margin: "0 ", padding: "0px" }}>
                  Humidity: {data.humidity}
                </p>
              </span>
              <span className="temp">
                <p
                  style={{
                    fontSize: "76px",
                    fontWeight: "100",
                    marginBottom: "10px",
                    position: "relative",
                    top: "20px",
                    height: "110px",
                  }}
                >
                  {data.temp}&deg;
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    position: "relative",
                    right: "15px",
                  }}
                >
                  {data.tempMin}&deg;/
                  <span style={{ color: "#666EA4" }}>{data.tempMax}&deg;</span>
                </p>
              </span>
            </div>

            <div className="last-block">
              <p style={{ fontWeight: "500" }}>
                The weather can be described as {data.weather} and feels like{" "}
                {data.feelsLike}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
