import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/common/Button/";
import featurePhoto from "../../assets/images/feature-photo.png";
import bulletPoint from "../../assets/images/bulet-point.png";
import buletPoint2 from "../../assets/images/bullet-point2.png";

export default function HomePage() {
  return (
    <>
      <div className="bg-hero">
        <HeroSection />
      </div>
      <FeatureSection />
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
    <>
      <div className="grid grid-cols-2 gap-4 p-5 md:p-10">
        <div>
          <img
            src={featurePhoto}
            alt="photo"
            className=" h-auto"
          />
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-bold color-tertiary">
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
    </>
  );
};

const TeamMember = ({
  avatar,
  title,
  description,
}) => {
  return (
    <>
      <div className="flex items-center border border-secondary-100 mb-6 rounded-lg">
        <img
          src={avatar}
          alt={`Avatar of ${title}`}
          className="w-12 h-12 rounded-full mr-8"
        />
        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

TeamMember.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
