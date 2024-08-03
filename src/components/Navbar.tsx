import { useTheme } from "../context/Themeprovider";

function Navbar() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <main className="flex items-center justify-between py-4 dark:text-white">
      <h1 className="font-lale font-bold text-xl">RAWG</h1>
      <form action="">
        <input
          type="text"
          placeholder="search games"
          className="w-[200px] md:w-[400px] lg:w-[500px] px-2 py-[5px] rounded-2xl outline-none border border-gray-300 font-vazir "
        />
      </form>
      <div>
        <button onClick={changeTheme}>switch theme</button>
      </div>
    </main>
  );
}

export default Navbar;
