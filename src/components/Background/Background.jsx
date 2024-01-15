import backgroundImage from '../../images/beams-basic.png';

const Background = () => {
  return (
    <>
      <img
        src={backgroundImage}
        alt="background"
        className="absolute left-1/4 top-0 -ml-[39rem] w-[100%] -z-50"
      ></img>
      <div
        className=" pointer-events-none absolute inset-x-0 top-3 -z-40 transform-gpu overflow-hidden blur-3xl sm:-top-30"
        aria-hidden="true"
      >
        <div
          className="pointer-events-none relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden  blur-3xl sm:top-[calc(33%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="pointer-events-none relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </>
  );
};

export default Background;
