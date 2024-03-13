import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/common/Button/";
import featurePhoto from "../../assets/images/feature-photo.png";
import bulletPoint from "../../assets/images/bulet-point.png";
import buletPoint2 from "../../assets/images/bullet-point2.png";
import singleTrip from "../../assets/images/Single Trip.png";
import singleTrip1 from "../../assets/images/Single Trip (1).png";
import singleTrip2 from "../../assets/images/Single Trip (2).png";
import singleTrip3 from "../../assets/images/Single Trip (3).png";

export default function HomePage() {
  return (
    <>
      <div className="bg-hero">
        <HeroSection />
      </div>
      <FeatureSection />
      <SampleComponent />
    </>
  );
}

const HeroSection = () => {
  const handleJoinWaitLisButton = () => {
    console.log("Join wait list button clicked");
  };

  const handleBecomeBetaButton = () => {
    alert("Become beta user button clicked");
  };
  return (
    <div className="relative bg-hero inset-0">
      <div className="absolute inset-x-0 -top-40 sm:-top-80 -z-10 transform-gpu overflow-hidden blur-3xl"></div>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            YOUR NEXT TRIP IS JUST A FEW CLICKS
            AWAY
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl leading-6 text-white">
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
  );
};

const FeatureSection = () => {
  const teamMembers = [
    {
      avatar: bulletPoint,
      title: "Explore Diverse Destinations",
      description:
        "Browse through curated group travel plans to find your dream destination.",
    },
    {
      avatar: buletPoint2,
      title: "Pay for your trip your way.",
      description:
        "Spread the cost with flexible payment plans. Choose what works for you, whether it's a one-time payment or easy installments.",
    },
    {
      avatar: bulletPoint,
      title: "Travel with Confidence",
      description:
        "Book with peace of mind, knowing all trips are curated from trusted agencies.",
    },
    // Add more team members as needed
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 md:p-10">
      <div>
        <img
          src={featurePhoto}
          alt="photo"
          className="w-full h-auto"
        />
      </div>
      <div>
        <h1 className="mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-tertiary">
          With Gomonji, you can
        </h1>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            avatar={member.avatar}
            title={member.title}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

const TeamMember = ({
  avatar,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center border border-secondary-100 mb-6 rounded-lg">
      <img
        src={avatar}
        alt={`Avatar of ${title}`}
        className="w-12 h-12 rounded-full sm:mr-8"
      />
      <div className="mt-3 sm:mt-0">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const SampleComponent = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-tertiary text-center mt-10 mb-10">
        Become a Beta Tester
      </h1>
      <p className="text-center text-center mt-10 mb-10">
        Be among the first to explore with us by
        becoming a beta tester and join one of
        these trips
      </p>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img src={singleTrip} alt="" />
        </div>
        <div>
          <img src={singleTrip1} alt="" />
        </div>
        <div>
          <img src={singleTrip2} alt="" />
        </div>
        <div>
          <img src={singleTrip3} alt="" />
        </div>
      </div>
      <div className="text-center text-center mt-10 mb-10">
        <Button
          label="Become a beta user"
          // onClick={handleBecomeBetaButton}
          className="ml-4"
          variant="primary"
        />
      </div>
    </>
  );
};
