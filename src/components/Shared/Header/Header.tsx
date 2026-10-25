import Navbar from "./Navbar";
import PriceTicker from "./PriceTicker";
import { sampleTicker } from "@/lib/ticker-data";

const Header = () => {
  return (
    <div>
      <Navbar />
      <PriceTicker items={sampleTicker} />
    </div>
  );
};

export default Header;
