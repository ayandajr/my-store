import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-center bg-gradient-to-r from-#0a0a0a to-#0a0a0a">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-lg sm:max-w-xl max-w-xs" style={{color: "white"}}>
            Designed by women. For women. In Quality.
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;