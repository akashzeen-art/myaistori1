import React from "react";
import styles from "./TermsOfService.module.css";

const TermsOfService = () => {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.card}>
        <h1 className={styles.title}>Terms of Service</h1>

        <h2 className={styles.subtitle}>TERMS AND CONDITIONS:</h2>
        <p className={styles.description}>
          By clicking on Subscribe, you agree to the below terms and conditions:
        </p>

        <ul className={styles.termsList}>
          <li>You will start the paid subscription after the free period automatically.</li>
          <li>No commitment, you can cancel your subscription at any time.</li>
          <li>The free trial is valid only for new subscribers.</li>
          <li>Enjoy your free trial for 24 hours.</li>
          <li>
            Please make sure that your browser is not using any 3rd-party blocking
            technologies and you have a healthy internet connection for swift access to
            the content.
          </li>
          <li>
            By proceeding, you are accepting all Terms and Conditions of the service
            and agree to receive updates about your subscription on your registered
            mobile number.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default TermsOfService;
