import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col h-[40vh] justify-center items-center gap-4 text-white">
      <div className="font-bold text-5xl">Buy me a Chai</div>
      <p>
        A crowdfunding plateform for creators. Get funded by fans and followers.
        start Now!
      </p>
      <div>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Start Now!
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Read More
        </button>
      </div>
    </div>
    <div className="bg-slate-700 w-full h-0.5 opacity-80">g</div>
    </>
  );
}
