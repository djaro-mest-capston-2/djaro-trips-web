import React from "react";
import Button from "../../components/common/Button/";

export default function HomePage() {
  const handleJoinWaitLisButton = () => {
    console.log("Join wait list button clicked");
  };

  const handleBecomeBetaButton = () => {
    alert("Become beta user button clicked");
  };
  return (
    <div className="inset-0">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              YOUR NEXT TRIP IS JUST A FEW CLICKS
              AWAY
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Explore the world with gomonji, your
              one-stop shop for curated group
              adventures with flexible payments.
            </p>
            <br />
            <Button
              variant="secondary"
              label="Join the wait list"
              onClick={handleJoinWaitLisButton}
            />
            <Button
              label="Become a beta user"
              onClick={handleBecomeBetaButton}
              className="ml-4"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
