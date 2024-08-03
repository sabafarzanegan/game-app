import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "./../components/Sidebar";

function Home() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* main section */}

        <section className=" flex items-start justify-center gap-x-4 mt-4">
          <Sidebar />
          <Main />
        </section>
      </div>
    </>
  );
}

export default Home;
