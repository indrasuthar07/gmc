import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-black via-blue-900 to-gray-900 min-h-screen text-white relative">
      {/* Blur Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-black to-gray-900 blur-2xl opacity-30"></div>

      <div className="flex justify-center flex-col gap-6 items-center h-[80vh] px-5 md:px-0 text-xs md:text-base relative z-10">
        <div className="font-extrabold flex flex-col gap-4 md:gap-6 md:text-6xl justify-center items-center text-4xl tracking-wide">
          <div className="text-center">
            <span className="text-blue-500 animate-pulse">Get Me a Chai</span>{" "}
            <span>
              <Image className="invertImg inline-block" src="/tea.gif" width={88} height={88} alt="Tea Icon" />
            </span>
          </div>
          <p className="text-center text-gray-400 text-lg md:text-xl max-w-3xl">
            A crowdfunding platform for creators to fund their projects.
          </p>
          <p className="text-center text-gray-400 text-lg md:text-xl max-w-3xl">
            A place where your fans can buy you a chai. Unleash the power of your
            fans and get your projects funded.
          </p>
        </div>

        <div className="flex gap-4 mt-6">
          <Link href={"/login"}>
            <button
              type="button"
              className="flex items-center gap-2 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-sm px-6 py-3 shadow-lg hover:shadow-gray-400 transition duration-300"
            >
              <span className="animate-bounce">🚀</span>
              Start Here
            </button>
          </Link>

          <Link href="/about">
            <button
              type="button"
              className="flex items-center gap-2 text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-sm px-6 py-3 shadow-lg hover:shadow-gray-400 transition duration-300"
            >
              <span className="animate-spin">ℹ️</span>
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-400">
          Your Fans Can Buy You a Chai
        </h2>
        <div className="flex gap-8 justify-around">
          <div className="item space-y-4 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-800 rounded-full p-3 shadow-lg"
              width={88}
              height={88}
              src="/man.gif"
              alt="Fans Help"
            />
            <p className="font-bold text-center text-blue-400 text-lg">
              Fans Want to Help
            </p>
            <p className="text-center text-gray-300 text-sm">
              Your fans are available to support you.
            </p>
          </div>
          <div className="item space-y-4 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-800 rounded-full p-3 shadow-lg"
              width={88}
              height={88}
              src="/coin.gif"
              alt="Fans Contribute"
            />
            <p className="font-bold text-center text-blue-400 text-lg">
              Fans Want to Contribute
            </p>
            <p className="text-center text-gray-300 text-sm">
              Your fans are willing to contribute financially.
            </p>
          </div>
          <div className="item space-y-4 flex flex-col items-center justify-center">
            <Image
              className="bg-slate-800 rounded-full p-3 shadow-lg"
              width={88}
              height={88}
              src="/group.gif"
              alt="Fans Collaborate"
            />
            <p className="font-bold text-center text-blue-400 text-lg">
              Fans Want to Collaborate
            </p>
            <p className="text-center text-gray-300 text-sm">
              Your fans are ready to collaborate with you.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto pb-16 pt-10 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-dotted-pattern opacity-20"></div>
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-400 z-10">
          Learn More About Us
        </h2>
        <div className="w-[90%] h-[30vh] md:w-[50%] md:h-[30vh] lg:w-[50%] lg:h-[30vh] xl:w-[50%] xl:h-[30vh] z-10">
        <div className="relative w-full h-full bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-stars-pattern opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-4">
              Explore the Universe of Chai
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              Dive into the sci-fi world of creators and fans. Discover how your fans can help you achieve your dreams.
            </p>
            <Link href="/about">
              <button
                type="button"
                className="flex items-center gap-2 text-black bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-6 py-3 shadow-lg hover:shadow-blue-500 transition duration-300"
              >
                <span className="animate-pulse">🌌</span>
                Learn More
              </button>
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}