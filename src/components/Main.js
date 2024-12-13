import "../styles/main.scss";
import StepProgress from "./StepProgress";
import StepOne from "./step/StepOne";
import StepTwo from "./step/StepTwo";
import StepThree from "./step/StepThree";
import ProgressControl from "./ProgressControl";

export default function Main() {
  return (
    <>
      <main className="site-main">
        <div className="main-container">
          {/* register */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={1}
            data-total-price={0}
          >
            {/* register-title */}
            <h2 className="register-title col col-12">結帳</h2>
            {/* register-progress */}
            <StepProgress />
            {/* register-form */}
            <section className="form-container col col-12">
              {/* address phase */}
              <StepOne />
              {/* shipping phase */}
              <StepTwo />
              {/* credit-card phase */}
              <StepThree />
            </section>
          </section>
          {/* progress-control */}
          <ProgressControl />
        </div>
      </main>
    </>
  );
}
