import CardProduct from "@/components/CardProduct";
import SortSelect from "@/components/SortSelect";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">All Products</h1>
        <SortSelect />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
}
