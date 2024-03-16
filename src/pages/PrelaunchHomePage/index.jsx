import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../components/common/Button";
import featurePhoto from "../../assets/images/feature-photo.png";
import bulletPoint from "../../assets/images/bulet-point.png";
import buletPoint2 from "../../assets/images/bullet-point2.png";
import trip from "../../assets/images/trips-images/Rectangle 11.png";
import trip1 from "../../assets/images/trips-images/Rectangle 9 (1).png";
import trip2 from "../../assets/images/trips-images/Rectangle 9.png";
import trip3 from "../../assets/images/trips-images/Rectangle 9 (2).png";
import betaFormPhoto from "../../assets/images/Rectangle 21.png";
import TextInput from "../../components/common/FormField";
import { TripList } from "../../components/features/TripDetails";
// import NavBar from "../../components/common/NavBar";

export default function PrelaunchHomePage() {
  return (
    <>
      <div className="bg-hero">
        <HeroSection />
      </div>
      <FeatureSection />
      <SampleComponent />
      <BetaFormSection />
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
  const tripsData = [
    {
      id: 1,
      picture: trip,
      title: "Trip to Beach Paradise",
      startDate: "2024-06-15",
      endDate: "2024-06-20",
      noOfPeople: 4,
      amount: 1200,
      bookButton: (
        <button className="bg-blue text-white px-4 py-2 rounded">
          Book Now
        </button>
      ),
    },
    {
      id: 2,
      picture: trip1,
      title: "Mountain Hiking Expedition",
      startDate: "2024-07-10",
      endDate: "2024-07-15",
      noOfPeople: 6,
      amount: 1800,
      bookButton: (
        <button className="bg-blue text-white px-4 py-2 rounded">
          Book Now
        </button>
      ),
    },
    {
      id: 3,
      picture: trip2,
      title: "Trip to Beach Paradise",
      startDate: "2024-06-15",
      endDate: "2024-06-20",
      noOfPeople: 4,
      amount: 1200,
      bookButton: (
        <button className="bg-blue text-white px-4 py-2 rounded">
          Book Now
        </button>
      ),
    },
    {
      id: 4,
      picture: trip3,
      title: "Mountain Hiking Expedition",
      startDate: "2024-07-10",
      endDate: "2024-07-15",
      noOfPeople: 6,
      amount: 1800,
      bookButton: (
        <button className="bg-blue text-white px-4 py-2 rounded">
          Book Now
        </button>
      ),
    },
    // Add more trip data objects
  ];
  return (
    <>
      <div className="text-center mt-10 mb-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-tertiary mb-10">
          Become a Beta Tester
        </h1>
        <p>
          Be among the first to explore with us by
          becoming a beta tester and join one of
          these trips
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"></div>
      </div>
      <TripList trips={tripsData} />
      <Button
        label="Become a beta user"
        className="ml-4"
        variant="primary"
      />
    </>
  );
};

const BetaFormSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-secondary">
      <div>
        <img
          src={betaFormPhoto}
          alt=""
          className="w-full h-auto"
        />
      </div>
      <div className="p-6 sm:p-12 lg:p-16">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-tertiary mb-6 sm:mb-10">
          Be the First to Know
        </h1>
        <p className="text-center mt-6 sm:mt-10 mb-6 sm:mb-10">
          Sign up now and get exclusive access to
          upcoming group trips and early booking
          offers.
        </p>
        <div>
          <WaitListSignUpForm />
        </div>
      </div>
    </div>
  );
};

const WaitListSignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] =
    useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <form className="flex flex-col space-y-4">
      <TextInput
        label="Email"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <TextInput
        label="Phone Number"
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        placeholder="Enter your Phone Number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        required
      />
      <Button
        label="Get Notified"
        className="ml-4 self-start sm:self-auto"
        variant="primary"
      />
    </form>
  );
};
