import PropTypes from "prop-types";
import trip from "../../assets/images/trips-images/Rectangle 11.png";
import trip1 from "../../assets/images/trips-images/Rectangle 9 (1).png";
import trip2 from "../../assets/images/trips-images/Rectangle 9.png";
import trip3 from "../../assets/images/trips-images/Rectangle 9 (2).png";
import { TripList } from "../../components/features/TripDetails";
import NavBar from "../../components/common/NavBar";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="bg-hero">
        <HeroSection />
      </div>
      <SampleComponent />
    </>
  );
}

const HeroSection = () => {
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
        </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6"></div>
      </div>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">
          Explore Our Trips
        </h1>
        <TripList trips={tripsData} />
      </div>
    </>
  );
};
